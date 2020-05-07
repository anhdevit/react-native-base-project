export class PolicyModel {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  getTitle() {
    if (this.type === 1) {
      return 'Chiết khấu phần trăm';
    } else if (this.type === 2) {
      return 'Chiết Khấu bằng tiền';
    } else {
      return 'Chọn chiết khấu';
    }
  }

  getValue() {
    if (this.type === 1) {
      return `${this.value} %`;
    } else if (this.type === 2) {
      return `${this.value} Tr`;
    } else {
      return '0';
    }
  }
}
