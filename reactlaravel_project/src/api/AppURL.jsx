class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api";
    // static Login = this.BaseURL + "/Login";
    static ProductListByRemark(Remark) {
      return this.BaseURL + "/productList" + Remark;
    }
  }
  export default AppURL;