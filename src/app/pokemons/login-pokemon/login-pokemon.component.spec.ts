import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPokemonComponent } from './login-pokemon.component';

describe('LoginPokemonComponent', () => {
  let component: LoginPokemonComponent;
  let fixture: ComponentFixture<LoginPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
