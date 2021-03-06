/**
 * Keys for each element within the app
 */
enum Keys {
  //* General
  RIGHT = 'right',
  LEFT = 'left',
  INPUT = 'input',
  TITLE = 'title',
  NOTE = 'note',

  //* Status Indicators
  PASS = 'pass',
  FAIL = 'fail',
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resovled',
  SUCCESS = 'success',
  FILTERED = 'filtered',
  UPDATE = 'update',
  DELETE = 'delete',
  RESET = 'reset',
  REJECTED = 'rejected',
  ERROR = 'error',

  //* COMPONENTS
  APP = 'App',
  HOME_PAGE = 'home-page',
  MAIN_NAVBAR = 'main-navbar',
  POST = 'post',
  BLOG_POST = 'blog-post',
  BLOG_SEARCH = 'blog-search',
  BLOG_SECTION = 'blog-section',
  TODO = 'todo',
  TODO_LIST = 'todo-list',
  ADD_TODO = 'add-todo',
  TODO_SECTION = 'todo-section',
  TODO_FILTER = 'todo-search',

  //* Properties
  HEADER = 'header',
  HEADING = 'heading',
  TEXT_BLOCK = 'text block',
  FLEX_BOX = 'flex',

  //* ELEMENT NAMES (css)
  ABOUT_01 = 'about-01',
  ABOUT_02 = 'about-02',
  ARROW = 'arrow',
  CAROUSEL = 'carousel',
  CONTACT_ME_01 = 'contact-me-1',
  FLIP_CARD = 'flip-card',
  FOOTER_01 = 'footer-01',
  MAIN_HEADER_01 = 'main-header-01',
  MAIN_HEADER_02 = 'main-header-02',
  MAIN_HEADER_03 = 'main-header-03',
  MISSION_STATEMENT = 'mission-statement',
  MAIN_HEADER_CAROUSEL = 'main-header-carousel',
  PORTFOLIO = 'portfolio',
  SERVICES_OFFERED = 'services-offered',
  SERVICE_CARD = 'service-card',
  SKILL_GRID = 'skill-grid',
  SLIDE = 'slide',
  SLIDER = 'slider',
  WEATHER_WIDGET = 'weather-widget',
  
  //* Specifics
  BASE_HEADER_SLIDER_HEIGHT = '80',
  CAROUSEL_AUTOPLAY_DEFAULT = '6',
  AUTOPLAY_OFF = '0',
  TITLE_INPUT = 'title__input',
  NOTE_INPUT = 'note__input',
};

export enum Numbers {
  CAROUSEL_AUTOPLAY_DEFAULT = 6,
  AUTOPLAY_OFF = 0
}

export default Keys;