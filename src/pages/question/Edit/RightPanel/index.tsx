import React, { FC } from 'react'
import { Tabs } from 'antd'
import { FileOutlined, SettingOutlined } from '@ant-design/icons'
import PropComponent from '../PropComponent'
const RightPanel: FC = () => {
  const tabsItem = [
    {
      key: 'prop',
      label: (
        <span>
          <FileOutlined></FileOutlined>
          组件属性
        </span>
      ),
      children: <PropComponent></PropComponent>
    },
    {
      key: 'setting',
      label: (
        <span>
          <SettingOutlined></SettingOutlined>
          设置
        </span>
      ),
      children: <div></div>
    }
  ]

  return <Tabs items={tabsItem} defaultActiveKey="prop"></Tabs>
}

export default RightPanel
