import * as React from "react";
import { Tabs } from "antd";
import { Modal } from "antd";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  ForwardOutlined,
  BackwardOutlined,
  RollbackOutlined,
  EnterOutlined,
  RetweetOutlined,
  SwapOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderBottomOutlined,
  BorderHorizontalOutlined,
  BorderInnerOutlined,
  BorderOuterOutlined,
  BorderLeftOutlined,
  BorderRightOutlined,
  BorderTopOutlined,
  BorderVerticleOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BellOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BorderlessTableOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CameraOutlined,
  CarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  CiOutlined,
  ClearOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CloudSyncOutlined,
  CloudUploadOutlined,
  ClusterOutlined,
  CodeOutlined,
  CoffeeOutlined,
  CommentOutlined,
  CompassOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CopyrightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  DeleteColumnOutlined,
  DeleteRowOutlined,
  DeliveredProcedureOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  DisconnectOutlined,
  DislikeOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
  EuroOutlined,
  ExceptionOutlined,
  ExpandAltOutlined,
  ExpandOutlined,
  ExperimentOutlined,
  ExportOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileExclamationOutlined,
  FileOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  FileWordOutlined,
  FileZipOutlined,
  FilterOutlined,
  FireOutlined,
  FlagOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  ForkOutlined,
  FormatPainterOutlined,
  FrownOutlined,
  FunctionOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  FunnelPlotOutlined,
  GatewayOutlined,
  GifOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  GroupOutlined,
  HddOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  HourglassOutlined,
  IdcardOutlined,
  ImportOutlined,
  InboxOutlined,
  InsertRowAboveOutlined,
  InsertRowBelowOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
  InsuranceOutlined,
  InteractionOutlined,
  KeyOutlined,
  LaptopOutlined,
  LayoutOutlined,
  LikeOutlined,
  LineOutlined,
  LinkOutlined,
  Loading3QuartersOutlined,
  LoadingOutlined,
  LockOutlined,
  MacCommandOutlined,
  MailOutlined,
  ManOutlined,
  MedicineBoxOutlined,
  MehOutlined,
  MenuOutlined,
  MergeCellsOutlined,
  MessageOutlined,
  MobileOutlined,
  MoneyCollectOutlined,
  MonitorOutlined,
  MoreOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined,
  NodeIndexOutlined,
  NotificationOutlined,
  NumberOutlined,
  OneToOneOutlined,
  PaperClipOutlined,
  PartitionOutlined,
  PayCircleOutlined,
  PercentageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PoundCircleOutlined,
  PoundOutlined,
  PoweroffOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PropertySafetyOutlined,
  PullRequestOutlined,
  PushpinOutlined,
  QrcodeOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RedEnvelopeOutlined,
  ReloadOutlined,
  RestOutlined,
  RobotOutlined,
  RocketOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  SaveOutlined,
  ScanOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SendOutlined,
  SettingOutlined,
  ShakeOutlined,
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SisternodeOutlined,
  SkinOutlined,
  SmileOutlined,
  SolutionOutlined,
  SoundOutlined,
  SplitCellsOutlined,
  StarOutlined,
  SubnodeOutlined,
  SwitcherOutlined,
  SyncOutlined,
  TableOutlined,
  TabletOutlined,
  TagOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  ToolOutlined,
  TrademarkCircleOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  TranslationOutlined,
  TrophyOutlined,
  UngroupOutlined,
  UnlockOutlined,
  UploadOutlined,
  UsbOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  VerifiedOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WhatsAppOutlined,
  WifiOutlined,
  WomanOutlined,
  QuestionOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoOutlined,
  InfoCircleOutlined,
  ExclamationOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  StopOutlined,
  EditOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  DashOutlined,
  SmallDashOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DragOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  RadiusSettingOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  YoutubeOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useState } from "react";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: scroll;
  height: 250px;
  li {
    display: inline-block;
    padding: 12px;
    margin: 3px 0;
    border-radius: 2px;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #1890ff;
    }
    span {
      font-size: 36px;
    }
  }
`;
const { TabPane } = Tabs;
interface IIconTabProps {
  setIcon: () => void;
  modalVisible: boolean;
  onCancel: () => void;
  onOk: () => void;
}
function callback(key: any) {
  console.log(key);
}

const IconTab: React.FunctionComponent<IIconTabProps> = (props) => {
  const test = (icon: string) => {
    console.log(icon);
    // props.setIcon(icon);
  };

  const { modalVisible, onOk, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title={false}
      visible={modalVisible}
      footer={false}
      onCancel={() => onCancel()}
      onOk={() => onOk()}
      width={900}
      // footer={null}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="方向性图标" key="1">
          <Ul>
            <li>
              <StepBackwardOutlined />
            </li>
            <li>
              <StepForwardOutlined />
            </li>
            <li>
              <FastBackwardOutlined />
            </li>
            <li>
              <FastForwardOutlined />
            </li>
            <li>
              <ShrinkOutlined />
            </li>
            <li>
              <ArrowsAltOutlined />
            </li>
            <li>
              <DownOutlined />
            </li>
            <li>
              <UpOutlined />
            </li>
            <li>
              <LeftOutlined />
            </li>
            <li>
              <RightOutlined />
            </li>
            <li>
              <CaretUpOutlined />
            </li>
            <li>
              <CaretDownOutlined />
            </li>
            <li>
              <CaretLeftOutlined />
            </li>
            <li>
              <CaretRightOutlined />
            </li>
            <li>
              <UpCircleOutlined />
            </li>
            <li>
              <DownCircleOutlined />
            </li>
            <li>
              <LeftCircleOutlined />
            </li>
            <li>
              <RightCircleOutlined />
            </li>
            <li>
              <DoubleRightOutlined />
            </li>
            <li>
              <DoubleLeftOutlined />
            </li>
            <li>
              <VerticalLeftOutlined />
            </li>
            <li>
              <VerticalRightOutlined />
            </li>
            <li>
              <VerticalAlignTopOutlined />
            </li>
            <li>
              <VerticalAlignMiddleOutlined />
            </li>
            <li>
              <VerticalAlignBottomOutlined />
            </li>
            <li>
              <ForwardOutlined />
            </li>
            <li>
              <BackwardOutlined />
            </li>
            <li>
              <RollbackOutlined />
            </li>
            <li>
              <EnterOutlined />
            </li>
            <li>
              <RetweetOutlined />
            </li>
            <li>
              <SwapOutlined />
            </li>
            <li>
              <SwapLeftOutlined />
            </li>
            <li>
              <SwapRightOutlined />
            </li>
            <li>
              <ArrowUpOutlined />
            </li>
            <li>
              <ArrowDownOutlined />
            </li>
            <li>
              <ArrowLeftOutlined />
            </li>
            <li>
              <ArrowRightOutlined />
            </li>
            <li>
              <PlayCircleOutlined />
            </li>
            <li>
              <UpSquareOutlined />
            </li>
            <li>
              <DownSquareOutlined />
            </li>
            <li>
              <LeftSquareOutlined />
            </li>
            <li>
              <RightSquareOutlined />
            </li>
            <li>
              <LoginOutlined />
            </li>
            <li>
              <LogoutOutlined />
            </li>
            <li>
              <MenuFoldOutlined />
            </li>
            <li>
              <MenuUnfoldOutlined />
            </li>
            <li>
              <BorderBottomOutlined />
            </li>
            <li>
              <BorderHorizontalOutlined />
            </li>
            <li>
              <BorderInnerOutlined />
            </li>
            <li>
              <BorderOuterOutlined />
            </li>
            <li>
              <BorderLeftOutlined />
            </li>
            <li>
              <BorderRightOutlined />
            </li>
            <li>
              <BorderTopOutlined />
            </li>
            <li>
              <BorderVerticleOutlined />
            </li>
            <li>
              <PicCenterOutlined />
            </li>
            <li>
              <PicLeftOutlined />
            </li>
            <li>
              <PicRightOutlined />
            </li>
            <li>
              <RadiusBottomleftOutlined />
            </li>
            <li>
              <RadiusBottomrightOutlined />
            </li>
            <li>
              <RadiusUpleftOutlined />
            </li>
            <li>
              <RadiusUprightOutlined />
            </li>
            <li>
              <FullscreenOutlined />
            </li>
            <li>
              <FullscreenExitOutlined />
            </li>
          </Ul>
        </TabPane>
        <TabPane tab="提示建议性图标" key="2">
          <Ul>
            <li>
              <QuestionOutlined />
            </li>
            <li>
              <QuestionCircleOutlined />
            </li>
            <li>
              <PlusOutlined />
            </li>
            <li>
              <PlusCircleOutlined />
            </li>
            <li>
              <PauseOutlined />
            </li>
            <li>
              <PauseCircleOutlined />
            </li>
            <li>
              <MinusOutlined />
            </li>
            <li>
              <MinusCircleOutlined />
            </li>
            <li>
              <PlusSquareOutlined />
            </li>
            <li>
              <MinusSquareOutlined />
            </li>
            <li>
              <InfoOutlined />
            </li>
            <li>
              <InfoCircleOutlined />
            </li>
            <li>
              <ExclamationOutlined />
            </li>
            <li>
              <ExclamationCircleOutlined />
            </li>
            <li>
              <CloseOutlined />
            </li>
            <li>
              <CloseCircleOutlined />
            </li>
            <li>
              <CloseSquareOutlined />
            </li>
            <li>
              <CheckOutlined />
            </li>
            <li>
              <CheckCircleOutlined />
            </li>
            <li>
              <CheckSquareOutlined />
            </li>
            <li>
              <ClockCircleOutlined />
            </li>
            <li>
              <WarningOutlined />
            </li>
            <li>
              <IssuesCloseOutlined />
            </li>
            <li>
              <StopOutlined />
            </li>
          </Ul>
        </TabPane>
        <TabPane tab="编辑类图标" key="3">
          <Ul>
            <li>
              <EditOutlined />
            </li>
            <li>
              <FormOutlined />
            </li>
            <li>
              <CopyOutlined />
            </li>
            <li>
              <ScissorOutlined />
            </li>
            <li>
              <DeleteOutlined />
            </li>
            <li>
              <SnippetsOutlined />
            </li>
            <li>
              <DiffOutlined />
            </li>
            <li>
              <HighlightOutlined />
            </li>
            <li>
              <AlignCenterOutlined />
            </li>
            <li>
              <AlignLeftOutlined />
            </li>
            <li>
              <AlignRightOutlined />
            </li>
            <li>
              <BgColorsOutlined />
            </li>
            <li>
              <BoldOutlined />
            </li>
            <li>
              <ItalicOutlined />
            </li>
            <li>
              <UnderlineOutlined />
            </li>
            <li>
              <StrikethroughOutlined />
            </li>
            <li>
              <RedoOutlined />
            </li>
            <li>
              <UndoOutlined />
            </li>
            <li>
              <ZoomInOutlined />
            </li>
            <li>
              <ZoomOutOutlined />
            </li>
            <li>
              <FontColorsOutlined />
            </li>
            <li>
              <FontSizeOutlined />
            </li>
            <li>
              <LineHeightOutlined />
            </li>
            <li>
              <DashOutlined />
            </li>
            <li>
              <SmallDashOutlined />
            </li>
            <li>
              <SortAscendingOutlined />
            </li>
            <li>
              <SortDescendingOutlined />
            </li>
            <li>
              <DragOutlined />
            </li>
            <li>
              <OrderedListOutlined />
            </li>
            <li>
              <UnorderedListOutlined />
            </li>
            <li>
              <RadiusSettingOutlined />
            </li>
            <li>
              <ColumnWidthOutlined />
            </li>
            <li>
              <ColumnHeightOutlined />
            </li>
          </Ul>
        </TabPane>
        <TabPane tab="数据类图标" key="4">
          <Ul>
            <li>
              <AreaChartOutlined />
            </li>
            <li>
              <PieChartOutlined />
            </li>
            <li>
              <BarChartOutlined />
            </li>
            <li>
              <DotChartOutlined />
            </li>
            <li>
              <LineChartOutlined />
            </li>
            <li>
              <RadarChartOutlined />
            </li>
            <li>
              <HeatMapOutlined />
            </li>
            <li>
              <FallOutlined />
            </li>
            <li>
              <RiseOutlined />
            </li>
            <li>
              <StockOutlined />
            </li>
            <li>
              <BoxPlotOutlined />
            </li>
            <li>
              <FundOutlined />
            </li>
            <li>
              <SlidersOutlined />
            </li>
          </Ul>
        </TabPane>
        <TabPane tab="网站通用图标" key="5">
          <Ul>
            <li>
              <AccountBookOutlined />
            </li>
            <li>
              <AimOutlined />
            </li>
            <li>
              <AlertOutlined />
            </li>
            <li>
              <ApartmentOutlined />
            </li>
            <li>
              <ApiOutlined />
            </li>
            <li>
              <AppstoreAddOutlined />
            </li>
            <li>
              <AppstoreOutlined />
            </li>
            <li>
              <AudioOutlined />
            </li>
            <li>
              <AudioMutedOutlined />
            </li>
            <li>
              <AuditOutlined />
            </li>
            <li>
              <BankOutlined />
            </li>
            <li>
              <BarcodeOutlined />
            </li>
            <li>
              <BarsOutlined />
            </li>
            <li>
              <BellOutlined />
            </li>
            <li>
              <BlockOutlined />
            </li>
            <li>
              <BookOutlined />
            </li>
            <li>
              <BorderOutlined />
            </li>
            <li>
              <BorderlessTableOutlined />
            </li>
            <li>
              <BranchesOutlined />
            </li>
            <li>
              <BugOutlined />
            </li>
            <li>
              <BuildOutlined />
            </li>
            <li>
              <BulbOutlined />
            </li>
            <li>
              <CalculatorOutlined />
            </li>
            <li>
              <CalendarOutlined />
            </li>
            <li>
              <CameraOutlined />
            </li>
            <li>
              <CarOutlined />
            </li>
            <li>
              <CarryOutOutlined />
            </li>
            <li>
              <CiCircleOutlined />
            </li>
            <li>
              <CiOutlined />
            </li>
            <li>
              <ClearOutlined />
            </li>
            <li>
              <CloudDownloadOutlined />
            </li>
            <li>
              <CloudOutlined />
            </li>
            <li>
              <CloudServerOutlined />
            </li>
            <li>
              <CloudSyncOutlined />
            </li>
            <li>
              <CloudUploadOutlined />
            </li>
            <li>
              <ClusterOutlined />
            </li>
            <li>
              <CodeOutlined />
            </li>
            <li>
              <CoffeeOutlined />
            </li>
            <li>
              <CommentOutlined />
            </li>
            <li>
              <CompassOutlined />
            </li>
            <li>
              <CompressOutlined />
            </li>
            <li>
              <ConsoleSqlOutlined />
            </li>
            <li>
              <ContactsOutlined />
            </li>
            <li>
              <ContainerOutlined />
            </li>
            <li>
              <ControlOutlined />
            </li>
            <li>
              <CopyrightOutlined />
            </li>
            <li>
              <CreditCardOutlined />
            </li>
            <li>
              <CrownOutlined />
            </li>
            <li>
              <CustomerServiceOutlined />
            </li>
            <li>
              <DashboardOutlined />
            </li>
            <li>
              <DatabaseOutlined />
            </li>
            <li>
              <DeleteColumnOutlined />
            </li>
            <li>
              <DeleteRowOutlined />
            </li>
            <li>
              <DeliveredProcedureOutlined />
            </li>
            <li>
              <DeploymentUnitOutlined />
            </li>
            <li>
              <DesktopOutlined />
            </li>
            <li>
              <DingtalkOutlined />
            </li>
            <li>
              <DisconnectOutlined />
            </li>
            <li>
              <DislikeOutlined />
            </li>
            <li>
              <DollarCircleOutlined />
            </li>
            <li>
              <DollarOutlined />
            </li>
            <li>
              <DownloadOutlined />
            </li>
            <li>
              <EllipsisOutlined />
            </li>
            <li>
              <EnvironmentOutlined />
            </li>
            <li>
              <EuroCircleOutlined />
            </li>
            <li>
              <EuroOutlined />
            </li>
            <li>
              <ExceptionOutlined />
            </li>
            <li>
              <ExpandAltOutlined />
            </li>
            <li>
              <ExpandOutlined />
            </li>
            <li>
              <ExperimentOutlined />
            </li>
            <li>
              <ExportOutlined />
            </li>
            <li>
              <EyeOutlined />
            </li>
            <li>
              <EyeInvisibleOutlined />
            </li>
            <li>
              <FieldBinaryOutlined />
            </li>
            <li>
              <FieldNumberOutlined />
            </li>
            <li>
              <FieldStringOutlined />
            </li>
            <li>
              <FieldTimeOutlined />
            </li>
            <li>
              <FileAddOutlined />
            </li>
            <li>
              <FileDoneOutlined />
            </li>
            <li>
              <FileExcelOutlined />
            </li>
            <li>
              <FileExclamationOutlined />
            </li>
            <li>
              <FileOutlined />
            </li>
            <li>
              <FileGifOutlined />
            </li>
            <li>
              <FileImageOutlined />
            </li>
            <li>
              <FileJpgOutlined />
            </li>
            <li>
              <FileMarkdownOutlined />
            </li>
            <li>
              <FilePdfOutlined />
            </li>
            <li>
              <FilePptOutlined />
            </li>
            <li>
              <FileProtectOutlined />
            </li>
            <li>
              <FileSearchOutlined />
            </li>
            <li>
              <FileSyncOutlined />
            </li>
            <li>
              <FileTextOutlined />
            </li>
            <li>
              <FileUnknownOutlined />
            </li>
            <li>
              <FileWordOutlined />
            </li>
            <li>
              <FileZipOutlined />
            </li>
            <li>
              <FilterOutlined />
            </li>
            <li>
              <FireOutlined />
            </li>
            <li>
              <FlagOutlined />
            </li>
            <li>
              <FolderAddOutlined />
            </li>
            <li>
              <FolderOutlined />
            </li>
            <li>
              <FolderOpenOutlined />
            </li>
            <li>
              <FolderViewOutlined />
            </li>
            <li>
              <ForkOutlined />
            </li>
            <li>
              <FormatPainterOutlined />
            </li>
            <li>
              <FrownOutlined />
            </li>
            <li>
              <FunctionOutlined />
            </li>
            <li>
              <FundProjectionScreenOutlined />
            </li>
            <li>
              <FundViewOutlined />
            </li>
            <li>
              <FunnelPlotOutlined />
            </li>
            <li>
              <GatewayOutlined />
            </li>
            <li>
              <GifOutlined />
            </li>
            <li>
              <GiftOutlined />
            </li>
            <li>
              <GlobalOutlined />
            </li>
            <li>
              <GoldOutlined />
            </li>
            <li>
              <GroupOutlined />
            </li>
            <li>
              <HddOutlined />
            </li>
            <li>
              <HeartOutlined />
            </li>
            <li>
              <HistoryOutlined />
            </li>
            <li>
              <HomeOutlined />
            </li>
            <li>
              <HourglassOutlined />
            </li>
            <li>
              <IdcardOutlined />
            </li>
            <li>
              <ImportOutlined />
            </li>
            <li>
              <InboxOutlined />
            </li>
            <li>
              <InsertRowAboveOutlined />
            </li>
            <li>
              <InsertRowBelowOutlined />
            </li>
            <li>
              <InsertRowLeftOutlined />
            </li>
            <li>
              <InsertRowRightOutlined />
            </li>
            <li>
              <InsuranceOutlined />
            </li>
            <li>
              <InteractionOutlined />
            </li>
            <li>
              <KeyOutlined />
            </li>
            <li>
              <LaptopOutlined />
            </li>
            <li>
              <LayoutOutlined />
            </li>
            <li>
              <LikeOutlined />
            </li>
            <li>
              <LineOutlined />
            </li>
            <li>
              <LinkOutlined />
            </li>
            <li>
              <Loading3QuartersOutlined />
            </li>
            <li>
              <LoadingOutlined />
            </li>
            <li>
              <LockOutlined />
            </li>
            <li>
              <MacCommandOutlined />
            </li>
            <li>
              <MailOutlined />
            </li>
            <li>
              <ManOutlined />
            </li>
            <li>
              <MedicineBoxOutlined />
            </li>
            <li>
              <MehOutlined />
            </li>
            <li>
              <MenuOutlined />
            </li>
            <li>
              <MergeCellsOutlined />
            </li>
            <li>
              <MessageOutlined />
            </li>
            <li>
              <MobileOutlined />
            </li>
            <li>
              <MoneyCollectOutlined />
            </li>
            <li>
              <MonitorOutlined />
            </li>
            <li>
              <MoreOutlined />
            </li>
            <li>
              <NodeCollapseOutlined />
            </li>
            <li>
              <NodeExpandOutlined />
            </li>
            <li>
              <NodeIndexOutlined />
            </li>
            <li>
              <NotificationOutlined />
            </li>
            <li>
              <NumberOutlined />
            </li>
            <li>
              <OneToOneOutlined />
            </li>
            <li>
              <PaperClipOutlined />
            </li>
            <li>
              <PartitionOutlined />
            </li>
            <li>
              <PayCircleOutlined />
            </li>
            <li>
              <PercentageOutlined />
            </li>
            <li>
              <PhoneOutlined />
            </li>
            <li>
              <PictureOutlined />
            </li>
            <li>
              <PlaySquareOutlined />
            </li>
            <li>
              <PoundCircleOutlined />
            </li>
            <li>
              <PoundOutlined />
            </li>
            <li>
              <PoweroffOutlined />
            </li>
            <li>
              <PrinterOutlined />
            </li>
            <li>
              <ProfileOutlined />
            </li>
            <li>
              <ProjectOutlined />
            </li>
            <li>
              <PropertySafetyOutlined />
            </li>
            <li>
              <PullRequestOutlined />
            </li>
            <li>
              <PushpinOutlined />
            </li>
            <li>
              <QrcodeOutlined />
            </li>
            <li>
              <ReadOutlined />
            </li>
            <li>
              <ReconciliationOutlined />
            </li>
            <li>
              <RedEnvelopeOutlined />
            </li>
            <li>
              <ReloadOutlined />
            </li>
            <li>
              <RestOutlined />
            </li>
            <li>
              <RobotOutlined />
            </li>
            <li>
              <RocketOutlined />
            </li>
            <li>
              <RotateLeftOutlined />
            </li>
            <li>
              <RotateRightOutlined />
            </li>
            <li>
              <SafetyCertificateOutlined />
            </li>
            <li>
              <SafetyOutlined />
            </li>
            <li>
              <SaveOutlined />
            </li>
            <li>
              <ScanOutlined />
            </li>
            <li>
              <ScheduleOutlined />
            </li>
            <li>
              <SearchOutlined />
            </li>
            <li>
              <SecurityScanOutlined />
            </li>
            <li>
              <SelectOutlined />
            </li>
            <li>
              <SendOutlined />
            </li>
            <li>
              <SettingOutlined />
            </li>
            <li>
              <ShakeOutlined />
            </li>
            <li>
              <ShareAltOutlined />
            </li>
            <li>
              <ShopOutlined />
            </li>
            <li>
              <ShoppingCartOutlined />
            </li>
            <li>
              <ShoppingOutlined />
            </li>
            <li>
              <SisternodeOutlined />
            </li>
            <li>
              <SkinOutlined />
            </li>
            <li>
              <SmileOutlined />
            </li>
            <li>
              <SolutionOutlined />
            </li>
            <li>
              <SoundOutlined />
            </li>
            <li>
              <SplitCellsOutlined />
            </li>
            <li>
              <StarOutlined />
            </li>
            <li>
              <SubnodeOutlined />
            </li>
            <li>
              <SwitcherOutlined />
            </li>
            <li>
              <SyncOutlined />
            </li>
            <li>
              <TableOutlined />
            </li>
            <li>
              <TabletOutlined />
            </li>
            <li>
              <TagOutlined />
            </li>
            <li>
              <TagsOutlined />
            </li>
            <li>
              <TeamOutlined />
            </li>
            <li>
              <ThunderboltOutlined />
            </li>
            <li>
              <ToTopOutlined />
            </li>
            <li>
              <ToolOutlined />
            </li>
            <li>
              <TrademarkCircleOutlined />
            </li>
            <li>
              <TrademarkOutlined />
            </li>
            <li>
              <TransactionOutlined />
            </li>
            <li>
              <TranslationOutlined />
            </li>
            <li>
              <TrophyOutlined />
            </li>
            <li>
              <UngroupOutlined />
            </li>
            <li>
              <UnlockOutlined />
            </li>
            <li>
              <UploadOutlined />
            </li>
            <li>
              <UsbOutlined />
            </li>
            <li>
              <UserAddOutlined />
            </li>
            <li>
              <UserDeleteOutlined />
            </li>
            <li>
              <UserOutlined />
            </li>
            <li>
              <UserSwitchOutlined />
            </li>
            <li>
              <UsergroupAddOutlined />
            </li>
            <li>
              <UsergroupDeleteOutlined />
            </li>
            <li>
              <VerifiedOutlined />
            </li>
            <li>
              <VideoCameraAddOutlined />
            </li>
            <li>
              <VideoCameraOutlined />
            </li>
            <li>
              <WalletOutlined />
            </li>
            <li>
              <WhatsAppOutlined />
            </li>
            <li>
              <WifiOutlined />
            </li>
            <li>
              <WomanOutlined />
            </li>
          </Ul>
        </TabPane>
        <TabPane tab="品牌和标识" key="6">
          <Ul>
            <li>
              <AndroidOutlined />
            </li>
            <li>
              <AppleOutlined />
            </li>
            <li>
              <WindowsOutlined />
            </li>
            <li>
              <IeOutlined />
            </li>
            <li>
              <ChromeOutlined />
            </li>
            <li>
              <GithubOutlined />
            </li>
            <li>
              <AliwangwangOutlined />
            </li>
            <li>
              <DingdingOutlined />
            </li>
            <li>
              <WeiboSquareOutlined />
            </li>
            <li>
              <WeiboCircleOutlined />
            </li>
            <li>
              <TaobaoCircleOutlined />
            </li>
            <li>
              <Html5Outlined />
            </li>
            <li>
              <WeiboOutlined />
            </li>
            <li>
              <TwitterOutlined />
            </li>
            <li>
              <WechatOutlined />
            </li>
            <li>
              <YoutubeOutlined />
            </li>
            <li>
              <AlipayCircleOutlined />
            </li>
            <li>
              <TaobaoOutlined />
            </li>
            <li>
              <SkypeOutlined />
            </li>
            <li>
              <QqOutlined />
            </li>
            <li>
              <MediumWorkmarkOutlined />
            </li>
            <li>
              <GitlabOutlined />
            </li>
            <li>
              <MediumOutlined />
            </li>
            <li>
              <LinkedinOutlined />
            </li>
            <li>
              <GooglePlusOutlined />
            </li>
            <li>
              <DropboxOutlined />
            </li>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <CodepenOutlined />
            </li>
            <li>
              <CodeSandboxOutlined />
            </li>
            <li>
              <AmazonOutlined />
            </li>
            <li>
              <GoogleOutlined />
            </li>
            <li>
              <CodepenCircleOutlined />
            </li>
            <li>
              <AlipayOutlined />
            </li>
            <li>
              <AntDesignOutlined />
            </li>
            <li>
              <AntCloudOutlined />
            </li>
            <li>
              <AliyunOutlined />
            </li>
            <li>
              <ZhihuOutlined />
            </li>
            <li>
              <SlackOutlined />
            </li>
            <li>
              <SlackSquareOutlined />
            </li>
            <li>
              <BehanceOutlined />
            </li>
            <li>
              <BehanceSquareOutlined />
            </li>
            <li>
              <DribbbleOutlined />
            </li>
            <li>
              <DribbbleSquareOutlined />
            </li>
            <li>
              <InstagramOutlined />
            </li>
            <li>
              <YuqueOutlined />
            </li>
            <li>
              <AlibabaOutlined />
            </li>
            <li>
              <YahooOutlined />
            </li>
            <li>
              <RedditOutlined />
            </li>
            <li>
              <SketchOutlined />
            </li>
          </Ul>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default IconTab;
