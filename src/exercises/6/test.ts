import {
  IsTypeEqual,
  FirstArgument,
  ThirdArgument,
  IsNotAny,
  typeAssert,
  ArrayElement
} from 'type-assertions';
import {logPerson, Person, persons, filterPersons} from './index';

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof filterPersons>,
        ({name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string}))[]
    >
>();

// criteria 不能设为 any
typeAssert<
  IsNotAny<
    ThirdArgument<typeof filterPersons>
  >
>();

// 返回类型不能是 any any[]
type FilterPersonsReturn = ReturnType<typeof filterPersons>;

typeAssert<
  IsNotAny<FilterPersonsReturn>
>();

typeAssert<
  IsNotAny<ArrayElement<FilterPersonsReturn>>
>();

const filtered1 = filterPersons(persons, 'user', {});
typeAssert<
    IsTypeEqual<
        typeof filtered1,
        {type: 'user'; name: string; age: number; occupation: string}[]
    >
>();

const filtered2 = filterPersons(persons, 'user', {name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep'});
typeAssert<
    IsTypeEqual<
        typeof filtered2,
        {type: 'user'; name: string; age: number; occupation: string}[]
    >
>();

const filtered3 = filterPersons(persons, 'admin', {});
typeAssert<
    IsTypeEqual<
        typeof filtered3,
        {type: 'admin'; name: string; age: number; role: string}[]
    >
>();

const filtered4 = filterPersons(persons, 'admin', {name: 'Jane Doe', age: 32, role: 'Administrator'});
typeAssert<
    IsTypeEqual<
        typeof filtered4,
        {type: 'admin'; name: string; age: number; role: string}[]
    >
>();

typeAssert<
    IsTypeEqual<
        Person,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string}))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();
