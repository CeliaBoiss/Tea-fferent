import React from 'react';
import TeaItem from './TeaItem/TeaItem';
import '../../../css/Teas/TeasList.css';

const DUMMY_TEAS = [
    {
        id: 't1',
        name: 'Sencha Ariake',
        description: 'This Japanese green tea is sweet yet invigorating, with a grassy and slightly salty flavour. A perfect gentle introduction to the joys of Sencha teas.',
        price: 9.99,
        photo: 'https://www.bienmanger.com/tinyMceData/images/contents/475/content_lg.jpg',
        type: 'green tea',
    },
    {
        id: 't2',
        name: 'Darjeeling Margaret\'s Hope',
        description: 'This tea from the Himalayan highlands features dark and fruity notes. A second flush with plenty of character.',
        price: 11.99,
        photo: 'https://media.ooreka.fr/public/image/the-noir-main-12939043.jpg',
        type: 'black tea',
    },
    {
        id: 't3',
        name: 'Thé du Louvre - Courtyard Tea',
        description: 'The Thé du Louvre - Courtyard Tea is an original creation that celebrates an exceptional place steeped in the history of France and the universal history of art, from the fortress of Philip Augustus to Pei’s pyramid.',
        price: 12.99,
        photo: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/e/1/9e1c131de4_112811_noir.jpg',
        type: 'black tea',
    },
    {
        id: 't4',
        name: 'Cisujen Mountains White Tea',
        description: 'A round, gourmet Grand Cru with a smooth texture and mild, sweet flavour.',
        price: 29.99,
        photo: 'https://www.santescience.fr/wp-content/uploads/2017/09/The-blanc.jpg',
        type: 'white tea',
    },
];

const TeasList = () => {
    const teasList = DUMMY_TEAS.map(tea =>
        <TeaItem key={tea.id} tea={tea} />
    );

    return (
        <div className="wrapper-list">
            <ul className="teas-list">
                {teasList}
            </ul>
        </div>
    );
};

export default TeasList;
