import React, { FC } from 'react'
import { AppstoreAddOutlined, FileAddOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import ComponentLib from '../ComponentLib'

const LeftPanel: FC = () => {
  const tabItemsConf = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreAddOutlined></AppstoreAddOutlined>
          组件库
        </span>
      ),
      children: <ComponentLib />
    },
    {
      key: 'layer',
      label: (
        <span>
          <FileAddOutlined></FileAddOutlined>
          画板
        </span>
      ),
      children: <div>画板</div>
    }
  ]

  return <Tabs items={tabItemsConf} defaultActiveKey="componentLib"></Tabs>
}

export default LeftPanel
