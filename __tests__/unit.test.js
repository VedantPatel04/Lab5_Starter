// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test Phone Numbers
test('Valid Phone Number', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Valid Phone Number No Area Code', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
});

test('Invalid Phone Number No Dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid Phone Number Wrong Amount of Digits', () => {
  expect(isPhoneNumber('23-4567')).toBe(false);
});

// Test Emails
test('Valid Email', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});

test('Valid Email', () => {
  expect(isEmail('abc@gmail.co')).toBe(true);
});

test('Invalid Email No Name', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});

test('Invalid Email # Domain', () => {
  expect(isEmail('john@123.com')).toBe(false);
});

// Test Strong Passwords
test('Strong Password Letters and Digits', () => {
  expect(isStrongPassword('abcd1234')).toBe(true);
});

test('Strong Password Special Character', () => {
  expect(isStrongPassword('abcdefg_')).toBe(true);
});

test('Not Strong Password Too Long', () => {
  expect(isStrongPassword('a123123123123123123123123123123123123123')).toBe(false);
});

test('Not Strong Password Too Short', () => {
  expect(isStrongPassword('1')).toBe(false);
});

// Test Dates
test('Valid Date', () => {
  expect(isDate('1/2/2025')).toBe(true);
});

test('Valid Date Double Digt M and D', () => {
  expect(isDate('10/11/2025')).toBe(true);
});

test('Invalid Date Long Month', () => {
  expect(isDate('100/1/2025')).toBe(false);
});

test('Invalid Date Short Year', () => {
  expect(isDate('1/2/23')).toBe(false);
});

// Test Hex Colors
test('Valid Hex', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('Valid Hex', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});

test('Invalid Hex Color', () => {
  expect(isHexColor('FF')).toBe(false);
});

test('Invalid Hex Color', () => {
  expect(isHexColor('X')).toBe(false);
});
