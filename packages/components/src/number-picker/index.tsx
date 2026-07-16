import { connect, mapReadPretty } from '@formily/react'
import { InputNumber } from 'antd'
import { PreviewText } from '../preview-text'

export const NumberPicker: typeof InputNumber = connect(
  InputNumber,
  mapReadPretty(PreviewText.NumberPicker)
) as unknown as typeof InputNumber

export default NumberPicker
