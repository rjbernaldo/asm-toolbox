import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GForm from 'grommet/components/Form';
import GHeading from 'grommet/components/Heading';
import GHeader from 'grommet/components/Header';
import GFormFields from 'grommet/components/FormFields';
import GFormField from 'grommet/components/FormField';
import GTextInput from 'grommet/components/TextInput';
import GTiles from 'grommet/components/Tiles';
import GTile from 'grommet/components/Tile';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GLabel from 'grommet/components/Label';
import GColumns from 'grommet/components/Columns';
import GCli from 'grommet/components/icons/base/cli';

const CreateMarketplace = () => (
  <GBox flex="grow">
    <GBox pad="medium" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <GHeader>
        <GHeading>
          Create Marketplace
        </GHeading>
      </GHeader>
    </GBox>
    <GForm style={{ width: '100%' }}>
      <GColumns maxCount={2} size="large">
        <GBox pad={{ horizontal: 'medium', vertical: 'small' }}>
          <GFormFields>
            <GFormField label="Credentials">
              <GTextInput placeHolder="email" />
              <GTextInput placeHolder="password" />
              <GTextInput placeHolder="mobile" />
            </GFormField>
          </GFormFields>
        </GBox>
        <GBox pad={{ horizontal: 'medium', vertical: 'small' }}>
          <GFormFields>
            <GFormField label="Company">
              <GTextInput placeHolder="name" />
              <GTextInput placeHolder="legal name" />
              <GTextInput placeHolder="tax number" />
            </GFormField>
          </GFormFields>
        </GBox>
        <GBox pad={{ horizontal: 'medium', vertical: 'small' }}>
          <GFormFields>
            <GFormField label="Address">
              <GTextInput placeHolder="addressline" />
              <GTextInput placeHolder="country (select)" />
              <GTextInput placeHolder="city" />
              <GTextInput placeHolder="state" />
              <GTextInput placeHolder="postcode" />
            </GFormField>
          </GFormFields>
        </GBox>
        <GBox pad={{ horizontal: 'medium', vertical: 'small' }}>
          <GFormFields>
            <GFormField label="Gateway Details">
              <GTextInput placeHolder="merchant category" />
              <GTextInput placeHolder="merchant identity string" />
              <GTextInput placeHolder="billing descriptor" />
              <GTextInput placeHolder="max transaction amount" />
            </GFormField>
          </GFormFields>
        </GBox>
        <GBox pad={{ horizontal: 'medium', vertical: 'small' }}>
          <GButton icon={<GCli />} label={<GLabel>Submit</GLabel>} plain={true} onClick={() => { console.log('test'); }} />
        </GBox>
      </GColumns>
    </GForm>
  </GBox>
);

export default CreateMarketplace;
