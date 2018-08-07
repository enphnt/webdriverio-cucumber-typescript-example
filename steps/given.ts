import { Given } from 'cucumber';
import { expect } from 'chai';
import openWebsite from '../support/action/openWebsite';

Given(/^I open the (url|site) "([^"]*)?"$/, (): void => {
  openWebsite
});
