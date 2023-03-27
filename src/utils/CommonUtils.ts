class CommonUtils {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public static isEmpty(value: any): boolean {
    const type = typeof value;
    // null
    if (type === 'undefined' || value == null) {
      return true;
    }
    // 문자열, 배열, 객체의 경우 길이를 체크합니다.
    if (type === 'string' || Array.isArray(value)) {
      return !value.length;
    }
    // 객체의 경우 속성의 존재 여부를 체크합니다.
    if (typeof value === 'object') {
      return !Object.keys(value).length;
    }
    // 나머지 경우는 false를 반환합니다.
    return false;
  }

  public static isJSON(value: any): boolean {
    try {
      const json = typeof value !== 'string' ? JSON.stringify(value) : value;
      JSON.parse(json);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default CommonUtils;
