export const getTimeText=(timestamp)=>{
    const minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
    const now = new Date().getTime(); //获取当前时间毫秒
    const diffValue = now - timestamp; //时间差

    if (diffValue < 0) {
        return;
    }
    const minC = diffValue / minute; //计算时间差的分，时，天，周，月
    const hourC = diffValue / hour;
    const dayC = diffValue / day;
    const weekC = diffValue / week;
    const monthC = diffValue / month;
    const yearC = diffValue / year;
    let result;
    if (yearC >= 1) {
        result = " " + parseInt(yearC) + "年前";
    } else if (monthC >= 1 && monthC <= 12) {
        result = " " + parseInt(monthC) + "月前";
    } else if (weekC >= 1 && weekC <= 4) {
        result = " " + parseInt(weekC) + "周前";
    } else if (dayC >= 1 && dayC <= 7) {
        result = " " + parseInt(dayC) + "天前";
    } else if (hourC >= 1 && hourC <= 24) {
        result = " " + parseInt(hourC) + "小时前";
    } else if (minC >= 1 && minC <= 60) {
        result = " " + parseInt(minC) + "分钟前";
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚";
    } else {
        const datetime = new Date();
        datetime.setTime(timestamp);
        const Nyear = datetime.getFullYear();
        const Nmonth =
            datetime.getMonth() + 1 < 10
                ? "0" + (datetime.getMonth() + 1)
                : datetime.getMonth() + 1;
        const Ndate =
            datetime.getDate() < 10
                ? "0" + datetime.getDate()
                : datetime.getDate();
        result = Nyear + "-" + Nmonth + "-" + Ndate;
    }
    return result;
}