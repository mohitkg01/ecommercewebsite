import React, { useState } from 'react';

const withLoader = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setLoading] = useState(false);

        return <WrappedComponent isLoading={isLoading} setLoading={setLoading} {...props} />;
    };
};

export default withLoader;