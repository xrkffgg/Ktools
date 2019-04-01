export default {
  data () {
    /* eslint-disable */
    return {
      
    }
    /* eslint-enable */
  },

  /* eslint-disable */
  methods: {
    /**
     * @desc 获取当前时间并进行格式化
     * type {day : 2011-1-1 , ss : 2011-1-1 12:20:33}
     */
    getNowDate(type){
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let day = now.getDate()
      let hh = now.getHours()
      let mm = now.getMinutes()
      let ss = now.getSeconds()

      month = month < 10 ? '0'+ month : month
      day = day < 10 ? '0'+ day : day

      if(type == 'day'){
        return year +'-'+ month +'-'+ day
      } else {
        return year +'-'+ month +'-'+ day + ' '+ hh + ':' + mm + ':' + ss
      }
    },

    /**
     * @desc 计算年龄
     * 计算年份->计算月份->计算天数
     * 现在时间，比较时间
     */
    getDiffYmdBetweenDate(sDate1,sDate2){
      var fixDate = function(sDate){
        var aD = sDate.split('-');
        for(var i = 0; i < aD.length; i++){
            aD[i] = fixZero(parseInt(aD[i]));
        }
        return aD.join('-');
      };
      var fixZero = function(n){
        return n < 10 ? '0'+n : n;
      };
      var fixInt = function(a){
        for(var i = 0; i < a.length; i++){
            a[i] = parseInt(a[i]);
        }
        return a;
      };
      var getMonthDays = function(y,m){
        var aMonthDays = [0,31,28,31,30,31,30,31,31,30,31,30,31];
        if((y%400 == 0) || (y%4==0 && y%100!=0)){
            aMonthDays[2] = 29;
        }
        return aMonthDays[m];
      };
      var checkDate = function(sDate){
      };
      var y = 0;
      var m = 0;
      var d = 0;
      var sTmp;
      var aTmp;
      sDate1 = fixDate(sDate1);
      sDate2 = fixDate(sDate2);
      if(sDate1 > sDate2){
        return 'past'
      }
      var aDate1 = sDate1.split('-');
        aDate1 = fixInt(aDate1);
      var aDate2 = sDate2.split('-');
        aDate2 = fixInt(aDate2);
      //计算相差的年份
      /*aTmp = [aDate1[0]+1,fixZero(aDate1[1]),fixZero(aDate1[2])];
      while(aTmp.join('-') <= sDate2){
          y++;
          aTmp[0]++;
      }*/
      y = aDate2[0] - aDate1[0];
      if( sDate2.replace(aDate2[0],'') < sDate1.replace(aDate1[0],'')){
        y = y - 1;
      }
      //计算月份
      aTmp = [aDate1[0]+y,aDate1[1],fixZero(aDate1[2])];
      while(true){
        if(aTmp[1] == 12){
          aTmp[0]++;
          aTmp[1] = 1;
        }else{
          aTmp[1]++;
        }
        if(([aTmp[0],fixZero(aTmp[1]),aTmp[2]]).join('-') <= sDate2){
          m++;
        } else {
          break;
        }
      }
      //计算天数
      aTmp = [aDate1[0]+y,aDate1[1]+m,aDate1[2]];
      if(aTmp[1] > 12){
        aTmp[0]++;
        aTmp[1] -= 12;
      }
      while(true){
        if(aTmp[2] == getMonthDays(aTmp[0],aTmp[1])){
          aTmp[1]++;
          aTmp[2] = 1;
        } else {
          aTmp[2]++;
        }
        sTmp = ([aTmp[0],fixZero(aTmp[1]),fixZero(aTmp[2])]).join('-');
        if(sTmp <= sDate2){
          d++;
        } else {
          break;
        }
      }
      return {y:y,m:m,d:d}
    },
  }
  /* eslint-enable */
}
