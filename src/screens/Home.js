import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
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
    },
    {
        name: 'Maggie Simpson',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png',
        job: 'Baby',
        id: '14',
        about:
            'Margaret Evelyn "Maggie" Simpson[9] (born December 17, 1989), is the 1-year-old, and youngest, child of Marge and Homer, and the baby sister to Bart and Lisa and the tetartagonist of The Simpsons. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family.',
    },
    {
        name: 'Rona',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png',
        job: 'Baby',
        id: '15',
        about:
            'Margaret Evelyn "Maggie" Simpson[9] (born December 17, 1989), is the 1-year-old, and youngest, child of Marge and Homer, and the baby sister to Bart and Lisa and the tetartagonist of The Simpsons. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family.',
    },
    {
        name: 'aa',
        avatar: 'https://productimages.hepsiburada.net/s/8/375/8902781960242.jpg',
        job: 'sdfsdf',
        id: '29',
        about:
            "Abbey is the daughter of Edwina, a woman with whom Abraham Simpson briefly had a relationship while he was stationed in England during World War II. It is insinuated that Abbey is the result of that relationship, which would make her Abe's daughter and Homer's half-sister. She very much looks and acts similar to Homer.",
    },
    {
        name: 'Lisa Simpson',
        avatar: 'https://upload.wikimedia.org/wikipedia/tr/e/ec/Lisa_Simpson.png',
        job: 'doctor',
        id: '33',
        about:
            'Lisa Marie Simpson, Amerikan animasyon televizyon dizisi Simpsonlar\'da yer alan bir kurgusal karakterdir. Simpson ailesinin ortanca çocuğu ve en büyük kızıdır. Seslendirmesi Yeardley Smith tarafından yapılmaktadır ve ilk kez 19 Nisan 1987 tarihinde The Tracey Ullman Show kısası "Good Night"ta göründü.',
    },
    {
        name: 'Homer Simpson',
        avatar:
            'https://upload.wikimedia.org/wikipedia/tr/0/02/Homer_Simpson_2006.png',
        job: 'Software Engineer',
        id: '34',
        about:
            "Simpsonlar, Matt Groening tarafından Fox için yaratılan animasyon televizyon durum komedisidir. Dizi, Homer, Marge, Bart, Lisa ve Maggie'den oluşan orta sınıf bir Amerikan ailesinin satirik bir parodisidir.",
    },
    {
        name: 'Marge Simpson',
        avatar:
            'https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png',
        job: 'Dentist',
        id: '35',
        about:
            'Marjorie "Marge" Simpson, animasyon televizyon dizisi Simpsonlar\'da yer alan ve söz konusu ailenin üyesi olan kurgusal bir karakterdir. Julie Kavner tarafından seslendirilmektedir ve ilk kez 19 Nisan 1987 tarihinde The Tracey Ullman Show kısası "Good Night"ta göründü. Marge, James L.',
    },
    {
        name: 'denemeuser',
        avatar: 'https://productimages.hepsiburada.net/s/8/375/8902781960242.jpg',
        job: 'doctor',
        id: '36',
        about: 'easdsfdsdfsref',
    },
    {
        name: 'userName',
        avatar: 'imageLink',
        job: 'jop',
        id: '37',
        about: 'about',
    },
    {
        name: 'userName',
        avatar: 'imageLink',
        job: 'jop',
        id: '38',
        about: 'about',
    },
    {
        name: 'Sheri Schoen',
        avatar: 'http://placeimg.com/640/480/food',
        job: 'National Usability Technician',
        id: '39',
        about: 'Werwre',
    },
    {
        name: 'Derrick Walsh',
        avatar: 'http://placeimg.com/640/480/nature',
        job: 'Global Intranet Liaison',
        id: '40',
        about:
            'React nnative ile ilgili uzmanlığı bulunmaktadır.Bu alanda halen çalışmaktadır.',
    },
    {
        name: 'Delbert Gleichner',
        avatar: 'http://placeimg.com/640/480/technics',
        job: 'Legacy Applications Architect',
        id: '41',
    },
    {
        name: 'Dorothy Hettinger I',
        avatar: 'http://placeimg.com/640/480/people',
        job: 'Global Creative Strategist',
        id: '42',
    },
    {
        name: 'Pat Sporer',
        avatar: 'http://placeimg.com/640/480/transport',
        job: 'Direct Factors Agent',
        id: '43',
    },
    {
        name: 'Ernest Sanford',
        avatar: 'http://placeimg.com/640/480/cats',
        job: 'Future Accounts Analyst',
        id: '44',
    },
    {
        name: 'Darren Von DVM',
        avatar: 'http://placeimg.com/640/480/nature',
        job: 'District Factors Designer',
        id: '45',
    },
    {
        name: 'Reginald Armstrong',
        avatar: 'http://placeimg.com/640/480/sports',
        job: 'Chief Metrics Orchestrator',
        id: '46',
    },
    {
        name: 'Renee Wehner',
        avatar: 'http://placeimg.com/640/480/nightlife',
        job: 'Chief Accountability Associate',
        id: '47',
    },
    {
        name: 'Joann Labadie',
        avatar: 'http://placeimg.com/640/480/fashion',
        job: 'Principal Configuration Architect',
        id: '48',
    },
    {
        name: 'Javier Zemlak',
        avatar: 'http://placeimg.com/640/480/nightlife',
        job: 'District Branding Representative',
        id: '49',
    },
    {
        name: 'asd',
        avatar: 'asd',
        job: 'asd',
        id: '50',
        about: 'asd',
    },
    {
        name: 'Milhouse',
        avatar: 'https://static.simpsonswiki.com/images/3/39/MilhouseHD.JPG',
        job: 'Student',
        id: '51',
        about:
            "Milhouse Van Houten is Bart Simpson's best friend. As the only child of Kirk and Luann Van Houten, Milhouse's most distinctive physical traits are his extreme nearsightedness (depicted by very small eyes), requiring thick glasses to correct, and a bulbous potato-shaped nose. Milhouse has his mother's coloring (blue hair) but not her vivacity or confidence, and shares his father's generally milquetoast and defeated demeanor, although Milhouse sometimes gets cocky and overconfident, raising his eyebrows lasciviously, usually while trying to woo Lisa. ",
    },
    {
        name: 'Edna Krabappel',
        avatar:
            'https://static.wikia.nocookie.net/thesunnyguys/images/d/df/528px-Edna_Krabappel.png',
        job: 'Teacher',
        id: '52',
        about:
            "Born in Springfield on January 21, she was an A-grade student back in school and held a Master's in education from Bryn Mawr College.",
    },
    {
        name: 'n1',
        avatar:
            'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
        job: 'j1',
        id: '53',
        about: 'a1',
    },
    {
        name: 'b1',
        avatar: 'http://cdn.onlinewebfonts.com/svg/img_252069.png',
        job: 'b2',
        id: '54',
        about: 'b3',
    },
    {
        name: 'Mrs. Anna Torp',
        avatar: 'http://placeimg.com/640/480/abstract',
        job: 'Principal Accountability Analyst',
        id: '55',
    },
    {
        name: 'Daniel Brown',
        avatar: 'http://placeimg.com/640/480/technics',
        job: 'Product Marketing Planner',
        id: '56',
    },
    {
        name: 'Bart',
        avatar:
            'https://www.freeiconspng.com/uploads/cartoon-characters-simpsons-png-16.png',
        job: 'Stu',
        id: '57',
        about: 'bart w',
    },
    {
        name: 'Ned Flanders',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/8/84/Ned_Flanders.png',
        job: 'Pharmacist',
        id: '58',
        about:
            'Ned Flanders grew up in New York and was the son of "Freaky Beatniks" who did not discipline Ned and let him run wild. Eventually, they took him to Dr. Foster, a psychiatrist, who put the young Ned through the University of Minnesota Spankalogical Protocol, which involved eight months of continuous spanking.',
    },
    {
        name: 'Charles Montgomery Burns',
        avatar:
            'https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png',
        job: 'Rich',
        id: '59',
        about:
            'Charles Montgomery Burns was born on September 15, 1886. As a child, Burns lived happily in a northern state with his natural parents, Clifford and Daphne Burns as the second-youngest of 12 children, the youngest being George Burns, and his teddy bear Bobo. As a child, Burns was so jubilant and amiable that his parents called him "Happy".',
    },
];

const Home = props => {
    const renderItem = ({ item, index }) => (
        <ListItem
            name={item.name}
            avatar={item.avatar}
            onPressDelete={() => console.log(item.id)}
            onPressDetail={() => props.navigation.navigate('Details', {
                item
            })}
        />
    );

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
            <AddButton onPressAddItem={() => props.navigation.navigate('AddNewCharacter')} />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
});
export default Home;
