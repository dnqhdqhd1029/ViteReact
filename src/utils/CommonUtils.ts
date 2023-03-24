class CommonUtils {
  public static isEmpty(value: any) {
    // 문자열, 배열, 객체의 경우 길이를 체크합니다.
    if (typeof value === 'string' || Array.isArray(value)) {
      return !value.length;
    }
    // null, undefined, NaN, Infinity, -Infinity의 경우 true를 반환합니다.
    if (value == null || isNaN(value) || !isFinite(value)) {
      return true;
    }
    // 객체의 경우 속성의 존재 여부를 체크합니다.
    if (typeof value === 'object') {
      return !Object.keys(value).length;
    }
    // 숫자인 경우
    if (typeof value === 'number') {
      return true;
    }
    // 나머지 경우는 false를 반환합니다.
    return false;
  }
}

export default CommonUtils;
