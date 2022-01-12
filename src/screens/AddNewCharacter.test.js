import { idChecker } from './AddNewCharacter'

const mockData = [
    {
        id: '6',
        name: 'Abraham Simpson II',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png',
        job: 'Retired',
        about:
            "Abraham Jebediah ”Abe” Simpson II, commonly known as Grampa Simpson, or simply as Grampa is a major character in The Simpsons and a supporting character in The Simpsons Movie. He is the patriarch of the Simpson family, the father of Homer, Herbert and Abbey Simpson, father-in-law of Marge Simpson, and the paternal grandfather of Bart, Lisa, and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier, his daughter-in-law's mother (which would have made Marge and Homer brother and sister in-laws)",
    },
    {
        id: '7',
        name: 'Abbey',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/1/12/Abbey_Tapped_Out.png',
        job: 'Retired',
        about:
            "Abbey is the daughter of Easşldlşasdlşasdlşlaşsdlşasşldalşsdlalslslslsllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllldwina, a woman with whom Abraham Simpson briefly had a relationship while he was stationed in England during World War II. It is insinuated that Abbey is the result of that relationship, which would make her Abe's daughter and Homer's half-sister. She very much looks and acts similar to Homer.",
    },]

test('idChecker function exists', () => {
    expect(typeof idChecker).toEqual('function');
});

test("idChecker not returns id that data already have", () => {
    expect(idChecker(mockData)).not.toEqual(6);
    expect(idChecker(mockData)).not.toEqual(7);
});

test("idChecker  returns id as a string", () => {
    expect(idChecker(mockData)).toBe(String);
});