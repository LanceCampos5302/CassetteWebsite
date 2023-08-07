import './CollectionView.css';

const CollectionView = ({ mainText, backgroundColor, highlightColor }) => {
        return (
            <div className='CollectionViewBase'>
                <div className='CollectionTop' style={{backgroundColor: backgroundColor}}></div>
                <div className='CollectionBottom' style={{backgroundColor: backgroundColor}}>
                    <div className='CollectionTextBox' style={{textDecorationColor: highlightColor}}>
                        <div>{mainText}</div>
                    </div>
                    <div className='CollectionHighlight' style={{backgroundColor: highlightColor}}></div>
                </div>
            </div>
        );
}

export default CollectionView;