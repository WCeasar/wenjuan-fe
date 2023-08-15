import React, { FC, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { FileOutlined, SettingOutlined } from '@ant-design/icons'

import PropComponent from '../PropComponent'
import PageSetting from '../PageSetting'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'

enum TAB_KEYS {
  PROPS = 'prop',
  PAGE_SETTING = 'setting'
}
const RightPanel: FC = () => {
  const { selectedId } = useGetComponentInfo()

  const [TabsKey, setTabsKey] = useState<TAB_KEYS>(TAB_KEYS.PAGE_SETTING)

  useEffect(() => {
    if (selectedId) setTabsKey(TAB_KEYS.PROPS)
    else setTabsKey(TAB_KEYS.PAGE_SETTING)
  }, [selectedId])

  const tabsItem = [
    {
      key: TAB_KEYS.PROPS,
      label: (
        <span>
          <FileOutlined></FileOutlined>
          组件属性
        </span>
      ),
      children: <PropComponent></PropComponent>
    },
    {
      key: TAB_KEYS.PAGE_SETTING,
      label: (
        <span>
          <SettingOutlined></SettingOutlined>
          设置
        </span>
      ),
      children: <PageSetting />
    }
  ]

  return <Tabs items={tabsItem} activeKey={TabsKey}></Tabs>
}

export default RightPanel
