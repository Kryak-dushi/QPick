import React from 'react';
import { observer } from "mobx-react";

import { Section } from './Section';
import { store } from './Store';


export const Page = observer(() => (
    <div className="content">
        <Section title={'Наушники'} items={store.getWired()} />
        <Section title={'Беспроводные наушники'} items={store.getWireless()} />
    </div>
))
