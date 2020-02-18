import validator from 'validator';

const VALID_MESSAGE = () => ({ isValid: true, errorMessage: null });
const INVALID_MESSAGE = (errorMessage) => ({ isValid: false, errorMessage });

const ERROR_MESSAGE = {
  isEmpty: 'Поле не заполнено',
  isAlpha: 'Поле может содержать только буквы русского алфавита',
  isEmail: 'Некорректный адрес электронной почты',
  phone: {
    IsNumeric: 'Введёный номер содержит недопустимые символы',
    FirstNumber: 'Введённый номер начинается не с "7"',
    IsLength: 'Неверная длина номера',
  },
  password: {
    isLength: 'Пароль должен содержать от 8 до 20 символов',
    isNumeric: 'Пароль не может состоять только из цифр',
    areEqual: 'Пароли не совпадают',
  },
  inn: {
    isNumeric: 'ИНН должен содержать только цифры',
    isLength: 'Длина ИНН - 10 цифр',
  },
  personalData:
    'Для регистрации необходимо дать согласие на обработку персональных данных',
};

function lastname(lastname) {
  if (validator.isEmpty(lastname))
    return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  if (!validator.isAlpha(lastname, 'ru-RU'))
    return INVALID_MESSAGE(ERROR_MESSAGE.isAlpha);
  return VALID_MESSAGE();
}

function firstname(firstname) {
  if (validator.isEmpty(firstname))
    return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  if (!validator.isAlpha(firstname, 'ru-RU'))
    return INVALID_MESSAGE(ERROR_MESSAGE.isAlpha);
  return VALID_MESSAGE();
}

function patronymic(patronymic) {
  if (!validator.isEmpty(patronymic) && !validator.isAlpha(patronymic, 'ru-RU'))
    return INVALID_MESSAGE(ERROR_MESSAGE.isAlpha);
  return VALID_MESSAGE();
}

function email(email) {
  if (validator.isEmpty(email)) return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  if (!validator.isEmail(email)) return INVALID_MESSAGE(ERROR_MESSAGE.isEmail);
  return VALID_MESSAGE();
}
function phone(phone) {
  if (validator.isEmpty(phone)) return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  if (!validator.isNumeric(phone, { no_symbols: true }))
    return INVALID_MESSAGE(ERROR_MESSAGE.phone.IsNumeric);
  if (phone[0] !== '7') return INVALID_MESSAGE(ERROR_MESSAGE.phone.FirstNumber);
  if (!validator.isLength(phone, { min: 11, max: 11 }))
    return INVALID_MESSAGE(ERROR_MESSAGE.phone.IsLength);
  return VALID_MESSAGE();
}
function originalPassword(password) {
  if (!validator.isLength(password, { min: 8, max: 20 }))
    return INVALID_MESSAGE(ERROR_MESSAGE.password.isLength);
  if (validator.isNumeric(password, { no_symbols: true }))
    return INVALID_MESSAGE(ERROR_MESSAGE.password.isNumeric);
  return VALID_MESSAGE();
}

function confirmPassword(password, confirmPassword) {
  if (confirmPassword !== password) {
    return INVALID_MESSAGE(ERROR_MESSAGE.password.areEqual);
  }
  return originalPassword(confirmPassword);
}
function organization(organization) {
  if (validator.isEmpty(organization))
    return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  return VALID_MESSAGE();
}
function inn(inn) {
  if (!validator.isNumeric(inn, { no_symbols: true }))
    return INVALID_MESSAGE(ERROR_MESSAGE.inn.isNumeric);
  if (!validator.isLength(inn, { min: 10, max: 10 }))
    return INVALID_MESSAGE(ERROR_MESSAGE.inn.isLength);
  return VALID_MESSAGE();
}
function position(position) {
  if (validator.isEmpty(position))
    return INVALID_MESSAGE(ERROR_MESSAGE.isEmpty);
  return VALID_MESSAGE();
}
function personalData(personalData) {
  if (!personalData) return INVALID_MESSAGE(ERROR_MESSAGE.personalData);
  return VALID_MESSAGE();
}

function areAllFieldsValid(info) {
  return (
    lastname(info.lastname).isValid &&
    firstname(info.firstname).isValid &&
    patronymic(info.patronymic).isValid &&
    email(info.email).isValid &&
    phone(info.phone).isValid &&
    originalPassword(info.password).isValid &&
    confirmPassword(info.password, info.confirmPassword).isValid &&
    organization(info.organization).isValid &&
    inn(info.inn).isValid &&
    position(info.position).isValid &&
    personalData(info.personalData).isValid
  );
}

const getInitialObject = () => ({
  isFormValid: true,
  lastname: VALID_MESSAGE(),
  firstname: VALID_MESSAGE(),
  patronymic: VALID_MESSAGE(),
  email: VALID_MESSAGE(),
  phone: VALID_MESSAGE(),
  password: VALID_MESSAGE(),
  confirmPassword: VALID_MESSAGE(),
  organization: VALID_MESSAGE(),
  inn: VALID_MESSAGE(),
  position: VALID_MESSAGE(),
  personalData: VALID_MESSAGE(),
});

function getFullValidationObject(info) {
  if (areAllFieldsValid(info)) return getInitialObject();
  return {
    isFormValid: false,
    lastname: lastname(info.lastname),
    firstname: firstname(info.firstname),
    patronymic: patronymic(info.patronymic),
    email: email(info.email),
    phone: phone(info.phone),
    password: originalPassword(info.password),
    confirmPassword: confirmPassword(info.password, info.confirmPassword),
    organization: organization(info.organization),
    inn: inn(info.inn),
    position: position(info.position),
    personalData: personalData(info.personalData),
  };
}

export default {
  areAllFieldsValid,
  getInitialObject,
  getFullValidationObject,
};
