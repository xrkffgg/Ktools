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
  }
}