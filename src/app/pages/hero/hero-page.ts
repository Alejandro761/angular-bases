import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: 'hero-page.html',
  imports: [UpperCasePipe]
})

export class HeroPage {
  name = signal('Ironman')
  age = signal(45)

  // señales computadas (computed) son de solo lectura
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description
  })

  capitalizedName = computed(() => this.name().toUpperCase())

  getHeroDescription() {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero() {
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm() {
    this.name.set('Ironman')
    this.age.set(45)
  }

  changeAge() {
    this.age.set(60)
  }
}
