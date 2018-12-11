export class SpaceAge{
  constructor(seconds){
    this.seconds = seconds;
  }
  calculateEarth(){
    return this.seconds / 31557600;
  }
  onEarth(){
    return Math.round(this.calculateEarth() * 100) / 100;
  }
  onMercury(){
    return Math.round(this.calculateEarth() / 0.2408467 * 100) / 100;
  }
  onVenus(){
    return Math.round(this.calculateEarth() / 0.61519726 * 100) / 100;
  }
  onMars(){
    return Math.round(this.calculateEarth() / 1.8808158 * 100) / 100;
  }
  onJupiter(){
    return Math.round(this.calculateEarth() / 11.862615 * 100) / 100;
  }
  onSaturn(){
    return Math.round(this.calculateEarth() / 29.447498 * 100) / 100;
  }
  onUranus(){
    return Math.round(this.calculateEarth() / 84.016846 * 100) / 100;
  }
  onNeptune(){
    return Math.round(this.calculateEarth() / 164.79132 * 100) / 100;
  }
}
