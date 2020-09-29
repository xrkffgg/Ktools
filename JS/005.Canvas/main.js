export default {
  methods : {
    // 黑白
    do1(){
      var cav = document.getElementById('myca')
      var ctx = cav.getContext('2d')
      let imageData = this.getImageData(cav,ctx)
      let pixels = imageData.data

      //遍历像素点
      for (let i=0; i<pixels.length; i+=4){
        let r = pixels[i]
        let g = pixels[i+1]
        let b = pixels[i+2]
        
        //获取灰色
        let gray = parseInt((r+g+b)/3)

        imageData.data[i] = gray
        imageData.data[i+1] = gray
        imageData.data[i+2] = gray
      }
      ctx.putImageData(imageData, 0,0)
    },

    // 反向
    do5(){
      var cav = document.getElementById('myca')
      var ctx = cav.getContext('2d')
      let imageData = this.getImageData(cav,ctx)
      let pixels = imageData.data

      //遍历像素点
      for (let i=0; i<pixels.length; i+=4){
        let r = pixels[i]
        let g = pixels[i+1]
        let b = pixels[i+2]
        
        imageData.data[i] = 255 - r
        imageData.data[i+1] = 255 - g
        imageData.data[i+2] = 255- b
      }
      ctx.putImageData(imageData, 0,0)
    },

    getImageData(cav,ctx){
      return ctx.getImageData(0,0,cav.width,cav.height)
    },

    downloadIamge (imgsrc, name) { // 下载图片地址和图片名
      let image = new Image()
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = function () {
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        let url = canvas.toDataURL('image/jpg') // 得到图片的base64编码数据
        let a = document.createElement('a') // 生成一个a元素
        let event = new MouseEvent('click') // 创建一个单击事件
        a.download = name || 'photo' // 设置图片名称
        a.href = url // 将生成的URL设置为a.href属性
        a.dispatchEvent(event) // 触发a的单击事件
      }
      image.src = imgsrc + '?time=' + new Date().getTime()
    },
  }
}