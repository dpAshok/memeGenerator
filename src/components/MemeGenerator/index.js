// import {useState} from 'react'

// import {
//   MainContainer,
//   Heading,
//   InputContainer,
//   Label,
//   InputElement,
//   GenerateButton,
//   ImageContainer,
//   TopText,
//   FontSize,
//   CustomSelect,
// } from './styledComponents'

// const fontSizesOptionsList = [
//   {
//     optionId: '8',
//     displayText: '8',
//   },
//   {
//     optionId: '12',
//     displayText: '12',
//   },
//   {
//     optionId: '16',
//     displayText: '16',
//   },
//   {
//     optionId: '20',
//     displayText: '20',
//   },
//   {
//     optionId: '24',
//     displayText: '24',
//   },
//   {
//     optionId: '28',
//     displayText: '28',
//   },
//   {
//     optionId: '32',
//     displayText: '32',
//   },
// ]
// // Write your code here

// const MemeGenerator = () => {
//   const [inputObject, setInputObject] = useState({
//     imageUrlInput: '',
//     imageURl: '',
//     topText: '',
//     bottomText: '',
//     fontSizeOptionId: fontSizesOptionsList[0].optionId,
//     activeFontsize: '',
//   })

//   const HandleGenerate = () => {
//     setInputObject({
//       ...inputObject,
//       imageURl: inputObject.imageUrlInput,
//       activeFontsize: inputObject.fontSizeOptionId,
//     })
//     console.log(inputObject.imageURl)
//   }
//   console.log(inputObject.fontSizeOptionId)

//   return (
//     <>
//       <MainContainer data-testId="meme">
//         <InputContainer data-testId="meme">
//           <Heading>Meme Generator</Heading>
//           <Label
//             htmlFor="
//         Image"
//           >
//             Image URL
//           </Label>
//           <InputElement
//             type="text"
//             id="Image"
//             onChange={e =>
//               setInputObject({
//                 ...inputObject,
//                 imageUrlInput: e.target.value,
//               })
//             }
//           />
//           <Label htmlFor="topText">Top Text</Label>
//           <InputElement
//             type="text"
//             id="topText"
//             onChange={e =>
//               setInputObject({...inputObject, topText: e.target.value})
//             }
//           />
//           <Label htmlFor="bottomText">Bottom Text</Label>
//           <InputElement
//             type="text"
//             id="bottomText"
//             onChange={e =>
//               setInputObject({...inputObject, bottomText: e.target.value})
//             }
//           />
//           <Label htmlFor="select">Font Size</Label>
//           <CustomSelect
//             id="select"
//             value={inputObject.fontSizeOptionId}
//             // value="16"
//             onChange={event =>
//               setInputObject({
//                 ...inputObject,
//                 fontSizeOptionId: event.target.value,
//               })
//             }
//           >
//             {fontSizesOptionsList.map(eachOption => (
//               <FontSize key={eachOption.optionId} value={eachOption.optionId}>
//                 {eachOption.displayText}
//               </FontSize>
//             ))}
//           </CustomSelect>
//           <GenerateButton type="button" onClick={HandleGenerate}>
//             Generate
//           </GenerateButton>
//         </InputContainer>
//         <ImageContainer
//           data-testid="meme"
//           backgroundImage={inputObject.imageURl}
//         >
//           <TopText>{inputObject.topText}</TopText>
//           <TopText>{inputObject.bottomText}</TopText>
//         </ImageContainer>
//       </MainContainer>
//     </>
//   )
// }

// export default MemeGenerator

import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
