// @ts-ignore
import { Component } from 'react';

declare module 'antd-img-crop-royaltymine' {
  export interface ImgCropProps {
    contain?: boolean;
    resize?: boolean;
    resizeAndDrag?: boolean;
    modalTitle?: string;
    modalWidth?: number;
    beforeCrop?: () => boolean;
  }
  export class ImgCrop extends Component<ImgCropProps> {}
  export default ImgCrop;
}
