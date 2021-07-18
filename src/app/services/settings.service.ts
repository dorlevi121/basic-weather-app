import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  isMobile: boolean = false;

  temperatureType: 'c' | 'f';
  temperatureTypeSubscription: BehaviorSubject<'c' | 'f'>;

  constructor(private lsService: LocalStorageService) {
    this.initialTemperatureType();
    this.checkIsMobile();
  }

  initialTemperatureType() {
    const type = this.lsService.get('temperatureType');
    if (type === 'f') {
      this.temperatureTypeSubscription = new BehaviorSubject<'c' | 'f'>('f');
      this.temperatureType = 'f'
    }
    else {
      this.temperatureTypeSubscription = new BehaviorSubject<'c' | 'f'>('c');
      this.temperatureType = 'c'
    }
  }

  setTemperatureType(type: 'c' | 'f') {
    this.temperatureType = type;
    this.temperatureTypeSubscription.next(type);
    this.lsService.set('temperatureType', type);
  }

  getTemperatureType(): 'c' | 'f' {
    return this.temperatureType;
  }

  private checkIsMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
