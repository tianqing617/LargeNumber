/** 
  * 大数据求和：
  * 按位相加，至到结束。即个位相加、十位相加、百位相加....
  * num1         String
  * num2         String
  * return       String
**/
export function add(strNum1, strNum2) {
  // 1. 检查是否是字段串。
  // 2. 获取两个字符串的位数(num1Len, num2Len)，以较长的作为循环次数，开始循环：
  //   1. 截取较长字符串的每一位，转为数值型num1。
  //   2. 截取较短字符串的每一位，转为数值型num2。截取不到，则为0。
  //   3. 截取的两数相加，存入数组sum中。
  // 3. 循环sum中每一项，转换为数值类型(total)，并返回。
  if (!checkIsString([strNum1, strNum2])) {
    throw new Error('parameters must be String');
  }

  const num1Len = strNum1.length;
  const num2Len = strNum2.length;
  const loop = num1Len > num2Len ? num1Len : num2Len;

  const sum = [];
  let isCarry = false;
  for (let i = 0; i < loop; i++) {
    const strNum1Item = strNum1.slice(i, i + 1) || 0;
    const strNum2Item = strNum2.slice(i, i + 1) || 0;

    const num1Item = parseInt(strNum1Item);
    const num2Item = parseInt(strNum2Item);

    sumItem = num1item + num2Item;
    // 处理进位
    if (isCarry) {
      sumItem += 1;
      isCarry = false;
    }

    // 处理大于9的情况
    if (sumItem > 9) {
      sumItem = sumItem % 10;
      isCarry = true;
    }

    sum.push(sumItem.toString());
  }

  // 数组转为字符串数字 [1, 3, 7, 2]
  return sum.reduce((total, currentValue) => {
    return total + currentValue;
  })

}

function checkIsString(arrNum) {
  return arrNum.every(num => typeof num === 'string');
}