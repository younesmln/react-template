const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

export function notEmail(value) {
    if (!isEmpty(value) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
}

export function required(value) {
    return isEmpty(value) ? true : false;
}

export function minLength(min) {
    return value => {
        return !!(isEmpty(value) || value.length < min)
    };
}

export function maxLength(max) {
    return value => {
        return !!(isEmpty(value) || value.length > max)
    };
}

export function integer(value) {
    return !Number.isInteger(Number(value));
}

export function oneOf(enumeration) {
    return value => {
        return !~enumeration.indexOf(value);
    };
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return 'Do not match';
            }
        }
    };
}