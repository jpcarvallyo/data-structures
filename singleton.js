let instance = null;
class ConfigureVals {
  //write your code here
  constructor(config) {
    this.xpoint = config.xpoint || 0;
    this.ypoint = config.ypoint || 0;
    this.shape = config.shape || null;
  }
  static getConfiguration(config) {
    if (!instance) {
      instance = new ConfigureVals(config);
    }
    console.log(instance);
    return instance;
  }
}

ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: "rectangle" });
ConfigureVals.getConfiguration({ xpoint: 7, ypoint: 2, shape: "square" });
