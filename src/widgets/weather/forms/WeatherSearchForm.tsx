import React from 'react';
import Element from '../../../store/keys';
import Input from '../../../components/input';
import Button from '../../../components/buttons/BaseButton-01';
import { WeatherSearchFormProps } from '../types';

const WeatherSearchForm: React.FunctionComponent<WeatherSearchFormProps> = (
  {     
    cityInput,
    stateInput,
    cityChange,
    stateChange,
    submitted  
  }
): JSX.Element => {
  return (
    <form 
      className={`flex flex-col justify-center items-center w-85/100 mb-3 p-3 inset m-auto`}
      onSubmit={ submitted }>
      <div className={`flex justify-center items-center mb-4`}>
        <Input
          name={ Element.WEATHER_WIDGET + '_input' }
          label={'City:'}
          value={ cityInput }
          changed={ cityChange }
          labelStyle={`mr-2`}
          inputStyle={`border-gray-300 border-2 border-solid input-focus `}>
        </Input>
        <Input
          name={ Element.WEATHER_WIDGET + '_alt-input'}
          label={'State:'}
          value={ stateInput }
          labelStyle={`ml-4 mr-2`}
          inputStyle={`w-8 border-gray-300 border-2 border-solid input-focus`}
          changed={ stateChange }>
        </Input>
      </div>
      <div>
        <Button
          parent={ Element.WEATHER_WIDGET }
          text={'Get Weather'}>
        </Button>
      </div>
    </form>
  );
};

export default WeatherSearchForm;