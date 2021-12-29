import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';
import {NavigationBar} from './navigationBar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavigationBar', () => {
  let component: NavigationBar;
  let fixture: ComponentFixture<NavigationBar>;
  let compiled;
  let homeNavigationTab;
  let newsNavigationTab;
  let contactNavigationTab;
  let aboutNavigationTab;
  let tabContent;

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [NavigationBar]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBar);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    homeNavigationTab = getByTestId('home-navigation-tab');
    newsNavigationTab = getByTestId('news-navigation-tab');
    contactNavigationTab = getByTestId('contact-navigation-tab');
    aboutNavigationTab = getByTestId('about-navigation-tab');
    tabContent = getByTestId('tab-content');
    fixture.detectChanges();
  });

  it(`Initial UI is rendered as expected`, async () => {
    await fixture.whenStable();
    expect(homeNavigationTab.textContent.trim()).toBe("Home");
    expect(newsNavigationTab.textContent.trim()).toBe("News");
    expect(contactNavigationTab.textContent.trim()).toBe("Contact");
    expect(aboutNavigationTab.textContent.trim()).toBe("About");
    expect(tabContent.textContent.trim()).toBe("HOME PAGE");
  });

  it('News tab works', () => {
    newsNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("NEWS PAGE");
  });

  it('Contact tab works', () => {
    contactNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("CONTACT PAGE");
  });

  it('About tab works', () => {
    aboutNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("ABOUT PAGE");
  });

  it('Home tab works', () => {
    homeNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("HOME PAGE");
  });

  it('Navigation works', () => {
    aboutNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("ABOUT PAGE");
    newsNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("NEWS PAGE");
    contactNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("CONTACT PAGE");
    homeNavigationTab.click();
    expect(tabContent.textContent.trim()).toBe("HOME PAGE");
  });
});
