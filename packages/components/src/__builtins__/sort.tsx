import { DragDropProvider, DragEndEvent, DragStartEvent } from '@dnd-kit/react'
import { isSortable, useSortable } from '@dnd-kit/react/sortable'
import { ReactFC } from '@formily/reactive-react'
import React, { createContext, useContext, useMemo } from 'react'

export interface ISortableContainerProps {
  list: any[]
  start?: number
  accessibility?: {
    container?: Element
  }
  onSortStart?: (event: {
    active: { id: string | number }
    raw: DragStartEvent
  }) => void
  onSortEnd?: (event: { oldIndex: number; newIndex: number }) => void
}

export function SortableContainer<T extends React.HTMLAttributes<HTMLElement>>(
  Component: ReactFC<T>,
): ReactFC<ISortableContainerProps & T> {
  return ({ list, onSortStart, onSortEnd, ...props }) => {
    const _onSortEnd = (event: DragEndEvent) => {
      const source = event.operation.source
      if (!isSortable(source)) return
      const oldIndex = source.initialIndex
      const newIndex = source.index
      onSortEnd?.({
        oldIndex,
        newIndex,
      })
    }

    return (
      <DragDropProvider
        onDragStart={(event) => {
          if (!event.operation.source) return
          onSortStart?.({
            active: {
              id: event.operation.source.id,
            },
            raw: event,
          })
        }}
        onDragEnd={_onSortEnd}
      >
        <Component {...(props as unknown as T)}>{props.children}</Component>
      </DragDropProvider>
    )
  }
}

export type SortableItemContextValue = Pick<
  ReturnType<typeof useSortable>,
  'handleRef'
>

export const SortableItemContext = createContext<
  Partial<SortableItemContextValue>
>({})

export const useSortableItem = (): Partial<SortableItemContextValue> => {
  return useContext(SortableItemContext)
}

export interface ISortableElementProps {
  index?: number
  lockAxis?: 'x' | 'y'
}

export function SortableElement<T extends React.HTMLAttributes<HTMLElement>>(
  Component: ReactFC<T>,
): ReactFC<T & ISortableElementProps> {
  return ({ index = 0, lockAxis, ...props }) => {
    const sortable = useSortable({
      id: index + 1,
      index,
    })
    const { ref, isDragging } = sortable

    const style = useMemo(() => {
      const itemStyle: React.CSSProperties = {
        position: isDragging ? 'relative' : 'unset',
        touchAction: 'none',
        zIndex: isDragging ? 1 : 'none',
      }
      const dragStyle = {
        opacity: '0.8',
      }

      const computedStyle = isDragging
        ? {
            ...itemStyle,
            ...dragStyle,
            ...props.style,
          }
        : {
            ...itemStyle,
            ...props.style,
          }

      return computedStyle
    }, [isDragging, props.style, lockAxis])

    return (
      <SortableItemContext.Provider value={sortable}>
        {
          Component({
            ...props,
            style,
            ref,
          } as unknown as T) as React.ReactNode
        }
      </SortableItemContext.Provider>
    )
  }
}

export function SortableHandle<T extends React.HTMLAttributes<HTMLElement>>(
  Component: ReactFC<T>,
): ReactFC<T> {
  return (props: T) => {
    const { handleRef } = useSortableItem()
    return <Component {...props} ref={handleRef as any} />
  }
}
