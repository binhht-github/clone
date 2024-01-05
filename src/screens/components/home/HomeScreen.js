import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import TopTabNavigation from './component/TopTabNavigation';

import { arrPost, getPostFollower, } from '../../../../DB';

function HomeScreen() {
    return (
        <TopTabNavigation />
    );
}
export default HomeScreen;
