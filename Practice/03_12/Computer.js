class Computer {
  constructor(processor, memory, gpu, hdSize, hdType) {
    this.processor = processor;
    this.memory = memory;
    this.gpu = gpu;
    this.hd = {
      sizeInGB: hdSize,
      type: hdType,
    };
  }
}

export default Computer;
