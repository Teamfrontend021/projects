import React, {useState, useRef} from 'react'
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { useEffect } from 'react';
// import QRCode from "qrcode";

const VerifyProduct = ({ provider, central }) => {

    const [companyContractAddress, setCompanyContractAddress] = useState('');
    const [productId, setProductId] = useState('');

    const [productStatus, setProductStatus] = useState(null);
    //const [scannedData, setScannedData] = useState(null);

    // const handleScan = (data) => {
    //     setScannedData(data);
    // }

    function showErrorMessage(error) {
        alert(`An error occurred while connecting to MetaMask: ${error.message}`);
    }

    const handleInput1Change = (e) => {
        setCompanyContractAddress(e.target.value);
      };
    
      const handleInput2Change = (e) => {
        setProductId(e.target.value);
      };
    


    const checkProduct = async () => {
        try{
            const result = await central.checkProduct(companyContractAddress, parseInt(productId));
            setProductStatus(result);
        }catch(error){
            console.log(error);
            showErrorMessage(error);
        }
        
    }


    return (
        <div className='VerifyProduct'>
            <h3 className='Component__title'>Verify Product</h3>
            <div className='Component__form'>
                <div className='form__content'>
                    <label className='form__label'>Enter Company contract address</label>
                    <input type="text" className='form__input' value={companyContractAddress} onChange={handleInput1Change} />
                </div>
                <div className='form__content'>
                    <label className='form__label'>Enter Product id</label>
                    <input type="text"  className='form__input' value={productId} onChange={handleInput2Change} />
                </div>
                
                <button className='button__toggle form__button' onClick={checkProduct}>Verify</button>
                {productStatus && <p>Result: {productStatus}</p>}
            </div>
        </div>
    )
}

// class QrContainer extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             result: 'Hold QR Code Steady and Clear to scan',
//         }
//         this.handleScan = this.handleScan.bind(this)
//     }
//     handleScan(result){
//         this.setState({
//             result: "data"
//         })
//     }
//     handleError(err){
//         console.error(err)
//     }
//     render(){
//         const previewStyle = {
//             height: 200,
//             width: 200,
//             display: 'flex',
//             "justify-content": "center"
//         }
//         const camStyle = {
//             display: 'flex',
//             justifyContent: "center",
//             marginTop: '-50px'
//         }

//         const textStyle = {
//             fontSize: '30px',
//             "text-align": 'center',
//             marginTop: '-50px'
//         }

//         return(
//             <React.Fragment>
//                 <div style={camStyle}>
//                     <QrReader
//                         delay={100}
//                         style={previewStyle}
//                         onError={this.handleError}
//                         onScan={this.handleScan}
//                         />
//                 </div>
//                 <p style={textStyle}>
//                     {this.state.result}
//                 </p>
//             </React.Fragment>
//         )
//     }
// }

export default VerifyProduct;