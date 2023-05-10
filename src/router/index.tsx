import { createBrowserRouter } from 'react-router-dom'
import React from 'react'

import MainLayout from '../layouts/MainLayout/index'
import ManageLayout from '../layouts/ManageLayout/index'
import QuestionLayout from '../layouts/QuestionLayout/index'
import Login from '../pages/Login/index'
import Home from '../pages/Home/index'
import NotFound from '../pages/NotFound/index'
import Register from '../pages/Register/index'
import List from '../pages/manage/List/index'
import Star from '../pages/manage/Star/index'
import Trash from '../pages/manage/Trash/index'
import Edit from '../pages/question/Edit/index'
import Stat from '../pages/question/Stat/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          },
          {
            path: 'trash',
            element: <Trash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      }
    ]
  }
])

export default router
