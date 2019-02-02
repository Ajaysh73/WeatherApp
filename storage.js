class Storage {
  constructor() {
    this.zipcode;
    this.defaultZipcode = 30041;
  }

  getLocation() {
    if (localStorage.getItem("zipcode") === null) {
      this.zipcode = this.defaultZipcode;
    } else {
      this.zipcode = localStorage.getItem("zipcode");
    }
    return { zipcode: this.zipcode };
  }

  setLocation(zipcode) {
    localStorage.setItem("zipcode", zipcode);
  }
}
