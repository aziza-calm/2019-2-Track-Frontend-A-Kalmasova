/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  var units;
  var devision_count = 0;
  if (bytes === parseFloat(bytes, 10) && bytes > 0) {
    while (bytes >= 1024 && devision_count < 4) {
      bytes /= 1024;
      devision_count++;
    }
    switch(devision_count) {
      case 0:
        units = 'B';
        break;
      case 1:
        units = 'KB';
        break;
      case 2:
        units = 'MB';
        break;
      case 3:
        units = 'GB';
        break;
      case 4:
        units = 'TB';
        break;
    }
    return bytes.toFixed(2) + ' ' + units;
  }
  else {
    return false;
  }
}
