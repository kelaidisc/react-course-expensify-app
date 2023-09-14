// Higher Order Component -> 
// A Component(HOC) that renders another Component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import { createRoot }  from 'react-dom/client';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => 
        <div>
            {
            props.isAuthenticated ? <WrappedComponent {...props}/>
             : <p>Please login to view the info</p>
            } 
        </div>;
};

const AuthInfo = requireAuthentication(Info);

const root = createRoot(document.getElementById('app'));
root.render(<AuthInfo isAuthenticated={false} info="These are the details" />);
// root.render(<AdminInfo isAdmin={true} info="These are the details" />);