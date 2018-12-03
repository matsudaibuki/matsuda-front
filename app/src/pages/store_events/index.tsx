import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { changeData, searchStart } from '../../modules/store_events'

import { AbstractComponent } from '../../libs'
import { MainPage } from '../../components/templates'

import {
  Button,
  Checkbox,
  LinkButton,
  InputLabel,
  SelectLabel,
  Table,
} from '../../components/atoms'

import {
  SearchField,
  SearchHeader,
  SearchBody,
  SearchFooter,
  SearchResult,
} from '../../components/organisms'


export class StoreEventsIndex extends AbstractComponent {

  render() {

    const {
      session,
      shiftList,
      searchConditions,
      searchResults,
      isSearching,
      changeData,
      search,
    } = this.props

    const table_header = [
      {title: '削除', dataIndex: 'delete', key: 'delete', width: '70px', render: () => <Checkbox />},
      {title: 'No.', dataIndex: 'no', key: 'no', width: '100px'},
      {title: 'ID', dataIndex: 'id', key: 'id', width: '150px'},
      {title: '店舗名', dataIndex: 'storeName', key: 'storeName'},
      {title: 'シフト名', dataIndex: 'shiftName', key: 'shiftName'},
      {title: '', dataIndex: 'edit', key: 'edit', width: '100px' , render: () => <Link href='/'><a>編集</a></Link>},
    ]

    return (
      <MainPage title='店舗イベントシフト検索'>
        <SearchField>
          <SearchHeader>
            <LinkButton href='/' type='primary'>新規登録</LinkButton>
          </SearchHeader>

          <SearchBody>
            <InputLabel span={8} id='organization' label='組織' value={session.organization} readOnly />
            <InputLabel span={8} id='area' label='エリア' value={`${session.areaCode}: ${session.areaName}`} readOnly />
            <InputLabel span={8} id='store' label='店舗名' value={`${session.storeCode}: ${session.storeName}`} readOnly />
            <SelectLabel span={8} id='entry-shift-list' label='登録済シフト選択' list={shiftList} value={searchConditions.entryShift} onChange={v => changeData('entryShift', v)} />
          </SearchBody>

          <SearchFooter>
            <Button onClick={() => search(searchConditions)}>検索</Button>
          </SearchFooter>
        </SearchField>

        {searchResults.length > 0 &&
        <SearchResult>
          <Table dataSource={searchResults} columns={table_header} bordered />
        </SearchResult>
        }
      </MainPage>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreEventsIndex)

function mapStateToProps(state, args) {
  return { ...state.storeEvents, session: {...state.session}, ...args }
}

function mapDispatchToProps(dispatch) {
  return {
    search: (searchConditions) => {dispatch(searchStart(searchConditions))},
    changeData: (target: string, value: string) => {dispatch(changeData(target, value))},
  }
}
