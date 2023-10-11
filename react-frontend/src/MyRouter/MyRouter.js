import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import BooksPage from "../components/BooksPage/BooksPage";
import SingleBooksPage from "../components/BooksPage/SingleBooksPage";
import PublishersPage from "../components/PublishersPage/PublishersPage";
import SinglePublishersPage from "../components/PublishersPage/SinglePublishersPage";
import AuthorsPage from "../components/AuthorsPage/AuthorsPage";
import SingleAuthorsPage from "../components/AuthorsPage/SingleAuthorsPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/books" exact element={<BooksPage />} />
                    <Route path="/books/:singleBooksId" exact element={<SingleBooksPage />} />
                    <Route path="/publishers" exact element={<PublishersPage />} />
                    <Route path="/publishers/:singlePublishersId" exact element={<SinglePublishersPage />} />
                    <Route path="/authors" exact element={<AuthorsPage />} />
                    <Route path="/authors/:singleAuthorsId" exact element={<SingleAuthorsPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
