// @flow
declare module "csstype" {
 declare export type StandardLonghandProperties<TLength = string | 0> = {
  alignContent?: AlignContentProperty,
  alignItems?: AlignItemsProperty,
  alignSelf?: AlignSelfProperty,
  animationDelay?: GlobalsString,
  animationDirection?: AnimationDirectionProperty,
  animationDuration?: GlobalsString,
  animationFillMode?: AnimationFillModeProperty,
  animationIterationCount?: AnimationIterationCountProperty,
  animationName?: AnimationNameProperty,
  animationPlayState?: AnimationPlayStateProperty,
  animationTimingFunction?: AnimationTimingFunctionProperty,
  appearance?: AppearanceProperty,
  backdropFilter?: BackdropFilterProperty,
  backfaceVisibility?: BackfaceVisibilityProperty,
  backgroundAttachment?: BackgroundAttachmentProperty,
  backgroundBlendMode?: BackgroundBlendModeProperty,
  backgroundClip?: BackgroundClipProperty,
  backgroundColor?: BackgroundColorProperty,
  backgroundImage?: BackgroundImageProperty,
  backgroundOrigin?: BackgroundOriginProperty,
  backgroundPosition?: BackgroundPositionProperty<TLength>,
  backgroundPositionX?: BackgroundPositionXProperty<TLength>,
  backgroundPositionY?: BackgroundPositionYProperty<TLength>,
  backgroundRepeat?: BackgroundRepeatProperty,
  backgroundSize?: BackgroundSizeProperty<TLength>,
  blockOverflow?: BlockOverflowProperty,
  blockSize?: BlockSizeProperty<TLength>,
  borderBlockEndColor?: BorderBlockEndColorProperty,
  borderBlockEndStyle?: BorderBlockEndStyleProperty,
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>,
  borderBlockStartColor?: BorderBlockStartColorProperty,
  borderBlockStartStyle?: BorderBlockStartStyleProperty,
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>,
  borderBottomColor?: BorderBottomColorProperty,
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>,
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>,
  borderBottomStyle?: BorderBottomStyleProperty,
  borderBottomWidth?: BorderBottomWidthProperty<TLength>,
  borderCollapse?: BorderCollapseProperty,
  borderImageOutset?: BorderImageOutsetProperty<TLength>,
  borderImageRepeat?: BorderImageRepeatProperty,
  borderImageSlice?: BorderImageSliceProperty,
  borderImageSource?: BorderImageSourceProperty,
  borderImageWidth?: BorderImageWidthProperty<TLength>,
  borderInlineEndColor?: BorderInlineEndColorProperty,
  borderInlineEndStyle?: BorderInlineEndStyleProperty,
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>,
  borderInlineStartColor?: BorderInlineStartColorProperty,
  borderInlineStartStyle?: BorderInlineStartStyleProperty,
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>,
  borderLeftColor?: BorderLeftColorProperty,
  borderLeftStyle?: BorderLeftStyleProperty,
  borderLeftWidth?: BorderLeftWidthProperty<TLength>,
  borderRightColor?: BorderRightColorProperty,
  borderRightStyle?: BorderRightStyleProperty,
  borderRightWidth?: BorderRightWidthProperty<TLength>,
  borderSpacing?: BorderSpacingProperty<TLength>,
  borderTopColor?: BorderTopColorProperty,
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>,
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>,
  borderTopStyle?: BorderTopStyleProperty,
  borderTopWidth?: BorderTopWidthProperty<TLength>,
  bottom?: BottomProperty<TLength>,
  boxAlign?: BoxAlignProperty,
  boxDecorationBreak?: BoxDecorationBreakProperty,
  boxFlexGroup?: GlobalsNumber,
  boxLines?: BoxLinesProperty,
  boxOrdinalGroup?: GlobalsNumber,
  boxShadow?: BoxShadowProperty,
  boxSizing?: BoxSizingProperty,
  breakAfter?: BreakAfterProperty,
  breakBefore?: BreakBeforeProperty,
  breakInside?: BreakInsideProperty,
  captionSide?: CaptionSideProperty,
  caretColor?: CaretColorProperty,
  clear?: ClearProperty,
  clipPath?: ClipPathProperty,
  color?: ColorProperty,
  colorAdjust?: ColorAdjustProperty,
  columnCount?: ColumnCountProperty,
  columnFill?: ColumnFillProperty,
  columnGap?: ColumnGapProperty<TLength>,
  columnRuleColor?: ColumnRuleColorProperty,
  columnRuleStyle?: ColumnRuleStyleProperty,
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>,
  columnSpan?: ColumnSpanProperty,
  columnWidth?: ColumnWidthProperty<TLength>,
  contain?: ContainProperty,
  content?: ContentProperty,
  counterIncrement?: CounterIncrementProperty,
  counterReset?: CounterResetProperty,
  cursor?: CursorProperty,
  direction?: DirectionProperty,
  display?: DisplayProperty,
  emptyCells?: EmptyCellsProperty,
  filter?: FilterProperty,
  flexBasis?: FlexBasisProperty<TLength>,
  flexDirection?: FlexDirectionProperty,
  flexGrow?: GlobalsNumber,
  flexShrink?: GlobalsNumber,
  flexWrap?: FlexWrapProperty,
  float?: FloatProperty,
  fontFamily?: FontFamilyProperty,
  fontFeatureSettings?: FontFeatureSettingsProperty,
  fontKerning?: FontKerningProperty,
  fontLanguageOverride?: FontLanguageOverrideProperty,
  fontSize?: FontSizeProperty<TLength>,
  fontSizeAdjust?: FontSizeAdjustProperty,
  fontStretch?: FontStretchProperty,
  fontStyle?: FontStyleProperty,
  fontSynthesis?: FontSynthesisProperty,
  fontVariant?: FontVariantProperty,
  fontVariantCaps?: FontVariantCapsProperty,
  fontVariantEastAsian?: FontVariantEastAsianProperty,
  fontVariantLigatures?: FontVariantLigaturesProperty,
  fontVariantNumeric?: FontVariantNumericProperty,
  fontVariantPosition?: FontVariantPositionProperty,
  fontVariationSettings?: FontVariationSettingsProperty,
  fontWeight?: FontWeightProperty,
  gridAutoColumns?: GridAutoColumnsProperty<TLength>,
  gridAutoFlow?: GridAutoFlowProperty,
  gridAutoRows?: GridAutoRowsProperty<TLength>,
  gridColumnEnd?: GridColumnEndProperty,
  gridColumnStart?: GridColumnStartProperty,
  gridRowEnd?: GridRowEndProperty,
  gridRowStart?: GridRowStartProperty,
  gridTemplateAreas?: GridTemplateAreasProperty,
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>,
  gridTemplateRows?: GridTemplateRowsProperty<TLength>,
  hangingPunctuation?: HangingPunctuationProperty,
  height?: HeightProperty<TLength>,
  hyphens?: HyphensProperty,
  imageOrientation?: ImageOrientationProperty,
  imageRendering?: ImageRenderingProperty,
  imageResolution?: ImageResolutionProperty,
  initialLetter?: InitialLetterProperty,
  initialLetterAlign?: InitialLetterAlignProperty,
  inlineSize?: InlineSizeProperty<TLength>,
  isolation?: IsolationProperty,
  justifyContent?: JustifyContentProperty,
  justifyItems?: JustifyItemsProperty,
  justifySelf?: JustifySelfProperty,
  left?: LeftProperty<TLength>,
  letterSpacing?: LetterSpacingProperty<TLength>,
  lineBreak?: LineBreakProperty,
  lineHeight?: LineHeightProperty<TLength>,
  lineHeightStep?: LineHeightStepProperty<TLength>,
  listStyleImage?: ListStyleImageProperty,
  listStylePosition?: ListStylePositionProperty,
  listStyleType?: ListStyleTypeProperty,
  marginBlockEnd?: MarginBlockEndProperty<TLength>,
  marginBlockStart?: MarginBlockStartProperty<TLength>,
  marginBottom?: MarginBottomProperty<TLength>,
  marginInlineEnd?: MarginInlineEndProperty<TLength>,
  marginInlineStart?: MarginInlineStartProperty<TLength>,
  marginLeft?: MarginLeftProperty<TLength>,
  marginRight?: MarginRightProperty<TLength>,
  marginTop?: MarginTopProperty<TLength>,
  maskBorderMode?: MaskBorderModeProperty,
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>,
  maskBorderRepeat?: MaskBorderRepeatProperty,
  maskBorderSlice?: MaskBorderSliceProperty,
  maskBorderSource?: MaskBorderSourceProperty,
  maskBorderWidth?: MaskBorderWidthProperty<TLength>,
  maskClip?: MaskClipProperty,
  maskComposite?: MaskCompositeProperty,
  maskImage?: MaskImageProperty,
  maskMode?: MaskModeProperty,
  maskOrigin?: MaskOriginProperty,
  maskPosition?: MaskPositionProperty<TLength>,
  maskRepeat?: MaskRepeatProperty,
  maskSize?: MaskSizeProperty<TLength>,
  maskType?: MaskTypeProperty,
  maxBlockSize?: MaxBlockSizeProperty<TLength>,
  maxHeight?: MaxHeightProperty<TLength>,
  maxInlineSize?: MaxInlineSizeProperty<TLength>,
  maxLines?: MaxLinesProperty,
  maxWidth?: MaxWidthProperty<TLength>,
  minBlockSize?: MinBlockSizeProperty<TLength>,
  minHeight?: MinHeightProperty<TLength>,
  minInlineSize?: MinInlineSizeProperty<TLength>,
  minWidth?: MinWidthProperty<TLength>,
  mixBlendMode?: MixBlendModeProperty,
  motionDistance?: OffsetDistanceProperty<TLength>,
  motionPath?: OffsetPathProperty,
  motionRotation?: OffsetRotateProperty,
  objectFit?: ObjectFitProperty,
  objectPosition?: ObjectPositionProperty<TLength>,
  offsetAnchor?: OffsetAnchorProperty<TLength>,
  offsetBlockEnd?: OffsetBlockEndProperty<TLength>,
  offsetBlockStart?: OffsetBlockStartProperty<TLength>,
  offsetDistance?: OffsetDistanceProperty<TLength>,
  offsetInlineEnd?: OffsetInlineEndProperty<TLength>,
  offsetInlineStart?: OffsetInlineStartProperty<TLength>,
  offsetPath?: OffsetPathProperty,
  offsetPosition?: OffsetPositionProperty<TLength>,
  offsetRotate?: OffsetRotateProperty,
  offsetRotation?: OffsetRotateProperty,
  opacity?: GlobalsNumber,
  order?: GlobalsNumber,
  orphans?: GlobalsNumber,
  outlineColor?: OutlineColorProperty,
  outlineOffset?: OutlineOffsetProperty<TLength>,
  outlineStyle?: OutlineStyleProperty,
  outlineWidth?: OutlineWidthProperty<TLength>,
  overflow?: OverflowProperty,
  overflowAnchor?: OverflowAnchorProperty,
  overflowBlock?: OverflowBlockProperty,
  overflowClipBox?: OverflowClipBoxProperty,
  overflowInline?: OverflowInlineProperty,
  overflowWrap?: OverflowWrapProperty,
  overflowX?: OverflowXProperty,
  overflowY?: OverflowYProperty,
  overscrollBehavior?: OverscrollBehaviorProperty,
  overscrollBehaviorX?: OverscrollBehaviorXProperty,
  overscrollBehaviorY?: OverscrollBehaviorYProperty,
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>,
  paddingBlockStart?: PaddingBlockStartProperty<TLength>,
  paddingBottom?: PaddingBottomProperty<TLength>,
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>,
  paddingInlineStart?: PaddingInlineStartProperty<TLength>,
  paddingLeft?: PaddingLeftProperty<TLength>,
  paddingRight?: PaddingRightProperty<TLength>,
  paddingTop?: PaddingTopProperty<TLength>,
  pageBreakAfter?: PageBreakAfterProperty,
  pageBreakBefore?: PageBreakBeforeProperty,
  pageBreakInside?: PageBreakInsideProperty,
  paintOrder?: PaintOrderProperty,
  perspective?: PerspectiveProperty<TLength>,
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>,
  placeContent?: PlaceContentProperty,
  pointerEvents?: PointerEventsProperty,
  position?: PositionProperty,
  quotes?: QuotesProperty,
  resize?: ResizeProperty,
  right?: RightProperty<TLength>,
  rotate?: RotateProperty,
  rowGap?: RowGapProperty<TLength>,
  rubyAlign?: RubyAlignProperty,
  rubyMerge?: RubyMergeProperty,
  rubyPosition?: RubyPositionProperty,
  scale?: ScaleProperty,
  scrollBehavior?: ScrollBehaviorProperty,
  scrollSnapType?: ScrollSnapTypeProperty,
  shapeImageThreshold?: GlobalsNumber,
  shapeMargin?: ShapeMarginProperty<TLength>,
  shapeOutside?: ShapeOutsideProperty,
  tabSize?: TabSizeProperty<TLength>,
  tableLayout?: TableLayoutProperty,
  textAlign?: TextAlignProperty,
  textAlignLast?: TextAlignLastProperty,
  textCombineUpright?: TextCombineUprightProperty,
  textDecorationColor?: TextDecorationColorProperty,
  textDecorationLine?: TextDecorationLineProperty,
  textDecorationSkip?: TextDecorationSkipProperty,
  textDecorationSkipInk?: TextDecorationSkipInkProperty,
  textDecorationStyle?: TextDecorationStyleProperty,
  textEmphasisColor?: TextEmphasisColorProperty,
  textEmphasisPosition?: GlobalsString,
  textEmphasisStyle?: TextEmphasisStyleProperty,
  textIndent?: TextIndentProperty<TLength>,
  textJustify?: TextJustifyProperty,
  textOrientation?: TextOrientationProperty,
  textOverflow?: TextOverflowProperty,
  textRendering?: TextRenderingProperty,
  textShadow?: TextShadowProperty,
  textSizeAdjust?: TextSizeAdjustProperty,
  textTransform?: TextTransformProperty,
  textUnderlinePosition?: TextUnderlinePositionProperty,
  top?: TopProperty<TLength>,
  touchAction?: TouchActionProperty,
  transform?: TransformProperty,
  transformBox?: TransformBoxProperty,
  transformOrigin?: TransformOriginProperty<TLength>,
  transformStyle?: TransformStyleProperty,
  transitionDelay?: GlobalsString,
  transitionDuration?: GlobalsString,
  transitionProperty?: TransitionPropertyProperty,
  transitionTimingFunction?: TransitionTimingFunctionProperty,
  translate?: TranslateProperty<TLength>,
  unicodeBidi?: UnicodeBidiProperty,
  userSelect?: UserSelectProperty,
  verticalAlign?: VerticalAlignProperty<TLength>,
  visibility?: VisibilityProperty,
  whiteSpace?: WhiteSpaceProperty,
  widows?: GlobalsNumber,
  width?: WidthProperty<TLength>,
  willChange?: WillChangeProperty,
  wordBreak?: WordBreakProperty,
  wordSpacing?: WordSpacingProperty<TLength>,
  wordWrap?: WordWrapProperty,
  writingMode?: WritingModeProperty,
  zIndex?: ZIndexProperty,
  zoom?: ZoomProperty,
};

declare export type StandardShorthandProperties<TLength = string | 0> = {
  all?: Globals,
  animation?: AnimationProperty,
  background?: BackgroundProperty<TLength>,
  border?: BorderProperty<TLength>,
  borderBlockEnd?: BorderBlockEndProperty<TLength>,
  borderBlockStart?: BorderBlockStartProperty<TLength>,
  borderBottom?: BorderBottomProperty<TLength>,
  borderColor?: BorderColorProperty,
  borderImage?: BorderImageProperty,
  borderInlineEnd?: BorderInlineEndProperty<TLength>,
  borderInlineStart?: BorderInlineStartProperty<TLength>,
  borderLeft?: BorderLeftProperty<TLength>,
  borderRadius?: BorderRadiusProperty<TLength>,
  borderRight?: BorderRightProperty<TLength>,
  borderStyle?: BorderStyleProperty,
  borderTop?: BorderTopProperty<TLength>,
  borderWidth?: BorderWidthProperty<TLength>,
  columnRule?: ColumnRuleProperty<TLength>,
  columns?: ColumnsProperty<TLength>,
  flex?: FlexProperty<TLength>,
  flexFlow?: FlexFlowProperty,
  font?: FontProperty,
  gap?: GapProperty<TLength>,
  grid?: GridProperty,
  gridArea?: GridAreaProperty,
  gridColumn?: GridColumnProperty,
  gridRow?: GridRowProperty,
  gridTemplate?: GridTemplateProperty,
  lineClamp?: LineClampProperty,
  listStyle?: ListStyleProperty,
  margin?: MarginProperty<TLength>,
  mask?: MaskProperty<TLength>,
  maskBorder?: MaskBorderProperty,
  motion?: OffsetProperty<TLength>,
  offset?: OffsetProperty<TLength>,
  outline?: OutlineProperty<TLength>,
  padding?: PaddingProperty<TLength>,
  textDecoration?: TextDecorationProperty,
  textEmphasis?: TextEmphasisProperty,
  transition?: TransitionProperty,
};

declare export type StandardProperties<TLength = string | 0> = StandardLonghandProperties<TLength> & StandardShorthandProperties<TLength>;

declare export type VendorLonghandProperties<TLength = string | 0> = {
  MozAnimationDelay?: GlobalsString,
  MozAnimationDirection?: AnimationDirectionProperty,
  MozAnimationDuration?: GlobalsString,
  MozAnimationFillMode?: AnimationFillModeProperty,
  MozAnimationIterationCount?: AnimationIterationCountProperty,
  MozAnimationName?: AnimationNameProperty,
  MozAnimationPlayState?: AnimationPlayStateProperty,
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty,
  MozAppearance?: MozAppearanceProperty,
  MozBackfaceVisibility?: BackfaceVisibilityProperty,
  MozBinding?: MozBindingProperty,
  MozBorderBottomColors?: MozBorderBottomColorsProperty,
  MozBorderEndColor?: BorderInlineEndColorProperty,
  MozBorderEndStyle?: BorderInlineEndStyleProperty,
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength>,
  MozBorderLeftColors?: MozBorderLeftColorsProperty,
  MozBorderRightColors?: MozBorderRightColorsProperty,
  MozBorderStartColor?: BorderInlineStartColorProperty,
  MozBorderStartStyle?: BorderInlineStartStyleProperty,
  MozBorderTopColors?: MozBorderTopColorsProperty,
  MozBoxSizing?: BoxSizingProperty,
  MozColumnCount?: ColumnCountProperty,
  MozColumnFill?: ColumnFillProperty,
  MozColumnGap?: ColumnGapProperty<TLength>,
  MozColumnRuleColor?: ColumnRuleColorProperty,
  MozColumnRuleStyle?: ColumnRuleStyleProperty,
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength>,
  MozColumnWidth?: ColumnWidthProperty<TLength>,
  MozContextProperties?: MozContextPropertiesProperty,
  MozFloatEdge?: MozFloatEdgeProperty,
  MozFontFeatureSettings?: FontFeatureSettingsProperty,
  MozFontLanguageOverride?: FontLanguageOverrideProperty,
  MozForceBrokenImageIcon?: GlobalsNumber,
  MozHyphens?: HyphensProperty,
  MozImageRegion?: MozImageRegionProperty,
  MozMarginEnd?: MarginInlineEndProperty<TLength>,
  MozMarginStart?: MarginInlineStartProperty<TLength>,
  MozOrient?: MozOrientProperty,
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength>,
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength>,
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength>,
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength>,
  MozPaddingEnd?: PaddingInlineEndProperty<TLength>,
  MozPaddingStart?: PaddingInlineStartProperty<TLength>,
  MozPerspective?: PerspectiveProperty<TLength>,
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength>,
  MozStackSizing?: MozStackSizingProperty,
  MozTabSize?: TabSizeProperty<TLength>,
  MozTextBlink?: MozTextBlinkProperty,
  MozTextSizeAdjust?: TextSizeAdjustProperty,
  MozTransformOrigin?: TransformOriginProperty<TLength>,
  MozTransformStyle?: TransformStyleProperty,
  MozTransitionDelay?: GlobalsString,
  MozTransitionDuration?: GlobalsString,
  MozTransitionProperty?: TransitionPropertyProperty,
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty,
  MozUserFocus?: MozUserFocusProperty,
  MozUserInput?: MozUserInputProperty,
  MozUserModify?: MozUserModifyProperty,
  MozUserSelect?: UserSelectProperty,
  MozWindowDragging?: MozWindowDraggingProperty,
  MozWindowShadow?: MozWindowShadowProperty,
  msAccelerator?: MsAcceleratorProperty,
  msBlockProgression?: MsBlockProgressionProperty,
  msContentZoomChaining?: MsContentZoomChainingProperty,
  msContentZoomLimitMax?: GlobalsString,
  msContentZoomLimitMin?: GlobalsString,
  msContentZoomSnapPoints?: GlobalsString,
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty,
  msContentZooming?: MsContentZoomingProperty,
  msFilter?: GlobalsString,
  msFlexDirection?: FlexDirectionProperty,
  msFlexPositive?: GlobalsNumber,
  msFlowFrom?: MsFlowFromProperty,
  msFlowInto?: MsFlowIntoProperty,
  msGridColumns?: GridAutoColumnsProperty<TLength>,
  msGridRows?: GridAutoRowsProperty<TLength>,
  msHighContrastAdjust?: MsHighContrastAdjustProperty,
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty,
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty,
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength>,
  msHyphens?: HyphensProperty,
  msImeAlign?: MsImeAlignProperty,
  msLineBreak?: LineBreakProperty,
  msOrder?: GlobalsNumber,
  msOverflowStyle?: MsOverflowStyleProperty,
  msOverflowX?: OverflowXProperty,
  msOverflowY?: OverflowYProperty,
  msScrollChaining?: MsScrollChainingProperty,
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength>,
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength>,
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength>,
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength>,
  msScrollRails?: MsScrollRailsProperty,
  msScrollSnapPointsX?: GlobalsString,
  msScrollSnapPointsY?: GlobalsString,
  msScrollSnapType?: MsScrollSnapTypeProperty,
  msScrollTranslation?: MsScrollTranslationProperty,
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty,
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty,
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty,
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty,
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty,
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty,
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty,
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty,
  msTextAutospace?: MsTextAutospaceProperty,
  msTextCombineHorizontal?: TextCombineUprightProperty,
  msTextOverflow?: TextOverflowProperty,
  msTextSizeAdjust?: TextSizeAdjustProperty,
  msTouchAction?: TouchActionProperty,
  msTouchSelect?: MsTouchSelectProperty,
  msTransform?: TransformProperty,
  msTransformOrigin?: TransformOriginProperty<TLength>,
  msUserSelect?: MsUserSelectProperty,
  msWordBreak?: WordBreakProperty,
  msWrapFlow?: MsWrapFlowProperty,
  msWrapMargin?: MsWrapMarginProperty<TLength>,
  msWrapThrough?: MsWrapThroughProperty,
  msWritingMode?: WritingModeProperty,
  OBackgroundSize?: BackgroundSizeProperty<TLength>,
  OObjectFit?: ObjectFitProperty,
  OObjectPosition?: ObjectPositionProperty<TLength>,
  OTabSize?: TabSizeProperty<TLength>,
  OTextOverflow?: TextOverflowProperty,
  OTransformOrigin?: TransformOriginProperty<TLength>,
  WebkitAlignContent?: AlignContentProperty,
  WebkitAlignItems?: AlignItemsProperty,
  WebkitAlignSelf?: AlignSelfProperty,
  WebkitAnimationDelay?: GlobalsString,
  WebkitAnimationDirection?: AnimationDirectionProperty,
  WebkitAnimationDuration?: GlobalsString,
  WebkitAnimationFillMode?: AnimationFillModeProperty,
  WebkitAnimationIterationCount?: AnimationIterationCountProperty,
  WebkitAnimationName?: AnimationNameProperty,
  WebkitAnimationPlayState?: AnimationPlayStateProperty,
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty,
  WebkitAppearance?: AppearanceProperty,
  WebkitBackdropFilter?: BackdropFilterProperty,
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty,
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength>,
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty,
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty,
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>,
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>,
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>,
  WebkitBorderImageSlice?: BorderImageSliceProperty,
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>,
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength>,
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty,
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>,
  WebkitBoxShadow?: BoxShadowProperty,
  WebkitBoxSizing?: BoxSizingProperty,
  WebkitClipPath?: ClipPathProperty,
  WebkitColumnCount?: ColumnCountProperty,
  WebkitColumnGap?: ColumnGapProperty<TLength>,
  WebkitColumnRuleColor?: ColumnRuleColorProperty,
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty,
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength>,
  WebkitColumnSpan?: ColumnSpanProperty,
  WebkitColumnWidth?: ColumnWidthProperty<TLength>,
  WebkitFilter?: FilterProperty,
  WebkitFlexBasis?: FlexBasisProperty<TLength>,
  WebkitFlexDirection?: FlexDirectionProperty,
  WebkitFlexGrow?: GlobalsNumber,
  WebkitFlexShrink?: GlobalsNumber,
  WebkitFlexWrap?: FlexWrapProperty,
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty,
  WebkitFontKerning?: FontKerningProperty,
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty,
  WebkitHyphens?: HyphensProperty,
  WebkitJustifyContent?: JustifyContentProperty,
  WebkitLineBreak?: LineBreakProperty,
  WebkitMarginEnd?: MarginInlineEndProperty<TLength>,
  WebkitMarginStart?: MarginInlineStartProperty<TLength>,
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty,
  WebkitMaskClip?: WebkitMaskClipProperty,
  WebkitMaskComposite?: WebkitMaskCompositeProperty,
  WebkitMaskImage?: WebkitMaskImageProperty,
  WebkitMaskOrigin?: WebkitMaskOriginProperty,
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>,
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>,
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>,
  WebkitMaskRepeat?: WebkitMaskRepeatProperty,
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty,
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty,
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength>,
  WebkitOrder?: GlobalsNumber,
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty,
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength>,
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength>,
  WebkitPerspective?: PerspectiveProperty<TLength>,
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength>,
  WebkitScrollSnapType?: ScrollSnapTypeProperty,
  WebkitShapeMargin?: ShapeMarginProperty<TLength>,
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty,
  WebkitTextCombine?: TextCombineUprightProperty,
  WebkitTextDecorationColor?: TextDecorationColorProperty,
  WebkitTextDecorationLine?: TextDecorationLineProperty,
  WebkitTextDecorationSkip?: TextDecorationSkipProperty,
  WebkitTextDecorationStyle?: TextDecorationStyleProperty,
  WebkitTextEmphasisColor?: TextEmphasisColorProperty,
  WebkitTextEmphasisPosition?: GlobalsString,
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty,
  WebkitTextFillColor?: WebkitTextFillColorProperty,
  WebkitTextOrientation?: TextOrientationProperty,
  WebkitTextSizeAdjust?: TextSizeAdjustProperty,
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty,
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>,
  WebkitTouchCallout?: WebkitTouchCalloutProperty,
  WebkitTransform?: TransformProperty,
  WebkitTransformOrigin?: TransformOriginProperty<TLength>,
  WebkitTransformStyle?: TransformStyleProperty,
  WebkitTransitionDelay?: GlobalsString,
  WebkitTransitionDuration?: GlobalsString,
  WebkitTransitionProperty?: TransitionPropertyProperty,
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty,
  WebkitUserModify?: WebkitUserModifyProperty,
  WebkitUserSelect?: UserSelectProperty,
  WebkitWritingMode?: WritingModeProperty,
};

declare export type VendorShorthandProperties<TLength = string | 0> = {
  MozAnimation?: AnimationProperty,
  MozBorderImage?: BorderImageProperty,
  MozColumnRule?: ColumnRuleProperty<TLength>,
  MozColumns?: ColumnsProperty<TLength>,
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength>,
  MozTransition?: TransitionProperty,
  msContentZoomLimit?: GlobalsString,
  msContentZoomSnap?: MsContentZoomSnapProperty,
  msFlex?: FlexProperty<TLength>,
  msScrollLimit?: GlobalsString,
  msScrollSnapX?: GlobalsString,
  msScrollSnapY?: GlobalsString,
  OBorderImage?: BorderImageProperty,
  WebkitAnimation?: AnimationProperty,
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength>,
  WebkitBorderImage?: BorderImageProperty,
  WebkitBorderRadius?: BorderRadiusProperty<TLength>,
  WebkitColumnRule?: ColumnRuleProperty<TLength>,
  WebkitColumns?: ColumnsProperty<TLength>,
  WebkitFlex?: FlexProperty<TLength>,
  WebkitFlexFlow?: FlexFlowProperty,
  WebkitLineClamp?: WebkitLineClampProperty,
  WebkitMask?: WebkitMaskProperty,
  WebkitTextEmphasis?: TextEmphasisProperty,
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength>,
  WebkitTransition?: TransitionProperty,
};

declare export type VendorProperties<TLength = string | 0> = VendorLonghandProperties<TLength> & VendorShorthandProperties<TLength>;

declare export type ObsoleteProperties<TLength = string | 0> = {
  azimuth?: AzimuthProperty,
  boxDirection?: BoxDirectionProperty,
  boxFlex?: GlobalsNumber,
  boxOrient?: BoxOrientProperty,
  boxPack?: BoxPackProperty,
  clip?: ClipProperty,
  fontVariantAlternates?: FontVariantAlternatesProperty,
  gridColumnGap?: GridColumnGapProperty<TLength>,
  gridGap?: GridGapProperty<TLength>,
  gridRowGap?: GridRowGapProperty<TLength>,
  imeMode?: ImeModeProperty,
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>,
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>,
  scrollSnapPointsX?: ScrollSnapPointsXProperty,
  scrollSnapPointsY?: ScrollSnapPointsYProperty,
  scrollSnapTypeX?: ScrollSnapTypeXProperty,
  scrollSnapTypeY?: ScrollSnapTypeYProperty,
  textCombineHorizontal?: TextCombineUprightProperty,
  KhtmlBoxDirection?: BoxDirectionProperty,
  KhtmlBoxFlex?: GlobalsNumber,
  KhtmlBoxOrient?: BoxOrientProperty,
  KhtmlBoxPack?: BoxPackProperty,
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty,
  MozBackgroundSize?: BackgroundSizeProperty<TLength>,
  MozBorderRadius?: BorderRadiusProperty<TLength>,
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength>,
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength>,
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength>,
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength>,
  MozBoxDirection?: BoxDirectionProperty,
  MozBoxFlex?: GlobalsNumber,
  MozBoxOrient?: BoxOrientProperty,
  MozBoxPack?: BoxPackProperty,
  MozBoxShadow?: BoxShadowProperty,
  MozOpacity?: GlobalsNumber,
  MozOutline?: OutlineProperty<TLength>,
  MozOutlineColor?: OutlineColorProperty,
  MozOutlineStyle?: OutlineStyleProperty,
  MozOutlineWidth?: OutlineWidthProperty<TLength>,
  MozResize?: ResizeProperty,
  MozTextAlignLast?: TextAlignLastProperty,
  MozTextDecorationColor?: TextDecorationColorProperty,
  MozTextDecorationLine?: TextDecorationLineProperty,
  MozTextDecorationStyle?: TextDecorationStyleProperty,
  msImeMode?: ImeModeProperty,
  OAnimation?: AnimationProperty,
  OAnimationDelay?: GlobalsString,
  OAnimationDirection?: AnimationDirectionProperty,
  OAnimationDuration?: GlobalsString,
  OAnimationFillMode?: AnimationFillModeProperty,
  OAnimationIterationCount?: AnimationIterationCountProperty,
  OAnimationName?: AnimationNameProperty,
  OAnimationPlayState?: AnimationPlayStateProperty,
  OAnimationTimingFunction?: AnimationTimingFunctionProperty,
  OTransform?: TransformProperty,
  OTransition?: TransitionProperty,
  OTransitionDelay?: GlobalsString,
  OTransitionDuration?: GlobalsString,
  OTransitionProperty?: TransitionPropertyProperty,
  OTransitionTimingFunction?: TransitionTimingFunctionProperty,
  WebkitBoxDirection?: BoxDirectionProperty,
  WebkitBoxFlex?: GlobalsNumber,
  WebkitBoxOrient?: BoxOrientProperty,
  WebkitBoxPack?: BoxPackProperty,
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty,
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty,
};

declare export type SvgProperties<TLength = string | 0> = {
  alignmentBaseline?: AlignmentBaselineProperty,
  baselineShift?: BaselineShiftProperty<TLength>,
  clip?: ClipProperty,
  clipPath?: ClipPathProperty,
  clipRule?: ClipRuleProperty,
  color?: ColorProperty,
  colorInterpolation?: ColorInterpolationProperty,
  colorRendering?: ColorRenderingProperty,
  cursor?: CursorProperty,
  direction?: DirectionProperty,
  display?: DisplayProperty,
  dominantBaseline?: DominantBaselineProperty,
  fill?: FillProperty,
  fillOpacity?: GlobalsNumber,
  fillRule?: FillRuleProperty,
  filter?: FilterProperty,
  floodColor?: FloodColorProperty,
  floodOpacity?: GlobalsNumber,
  font?: FontProperty,
  fontFamily?: FontFamilyProperty,
  fontSize?: FontSizeProperty<TLength>,
  fontSizeAdjust?: FontSizeAdjustProperty,
  fontStretch?: FontStretchProperty,
  fontStyle?: FontStyleProperty,
  fontVariant?: FontVariantProperty,
  fontWeight?: FontWeightProperty,
  glyphOrientationVertical?: GlyphOrientationVerticalProperty,
  imageRendering?: ImageRenderingProperty,
  letterSpacing?: LetterSpacingProperty<TLength>,
  lightingColor?: LightingColorProperty,
  lineHeight?: LineHeightProperty<TLength>,
  marker?: MarkerProperty,
  markerEnd?: MarkerEndProperty,
  markerMid?: MarkerMidProperty,
  markerStart?: MarkerStartProperty,
  mask?: MaskProperty<TLength>,
  opacity?: GlobalsNumber,
  overflow?: OverflowProperty,
  paintOrder?: PaintOrderProperty,
  pointerEvents?: PointerEventsProperty,
  shapeRendering?: ShapeRenderingProperty,
  stopColor?: StopColorProperty,
  stopOpacity?: GlobalsNumber,
  stroke?: StrokeProperty,
  strokeDasharray?: StrokeDasharrayProperty<TLength>,
  strokeDashoffset?: StrokeDashoffsetProperty<TLength>,
  strokeLinecap?: StrokeLinecapProperty,
  strokeLinejoin?: StrokeLinejoinProperty,
  strokeMiterlimit?: GlobalsNumber,
  strokeOpacity?: GlobalsNumber,
  strokeWidth?: StrokeWidthProperty<TLength>,
  textAnchor?: TextAnchorProperty,
  textDecoration?: TextDecorationProperty,
  textRendering?: TextRenderingProperty,
  unicodeBidi?: UnicodeBidiProperty,
  vectorEffect?: VectorEffectProperty,
  visibility?: VisibilityProperty,
  whiteSpace?: WhiteSpaceProperty,
  wordSpacing?: WordSpacingProperty<TLength>,
  writingMode?: WritingModeProperty,
};

declare export type Properties<TLength = string | 0> = StandardProperties<TLength> & VendorProperties<TLength> & ObsoleteProperties<TLength> & SvgProperties<TLength>;

declare export type StandardLonghandPropertiesHyphen<TLength = string | 0> = {
  "align-content"?: AlignContentProperty,
  "align-items"?: AlignItemsProperty,
  "align-self"?: AlignSelfProperty,
  "animation-delay"?: GlobalsString,
  "animation-direction"?: AnimationDirectionProperty,
  "animation-duration"?: GlobalsString,
  "animation-fill-mode"?: AnimationFillModeProperty,
  "animation-iteration-count"?: AnimationIterationCountProperty,
  "animation-name"?: AnimationNameProperty,
  "animation-play-state"?: AnimationPlayStateProperty,
  "animation-timing-function"?: AnimationTimingFunctionProperty,
  appearance?: AppearanceProperty,
  "backdrop-filter"?: BackdropFilterProperty,
  "backface-visibility"?: BackfaceVisibilityProperty,
  "background-attachment"?: BackgroundAttachmentProperty,
  "background-blend-mode"?: BackgroundBlendModeProperty,
  "background-clip"?: BackgroundClipProperty,
  "background-color"?: BackgroundColorProperty,
  "background-image"?: BackgroundImageProperty,
  "background-origin"?: BackgroundOriginProperty,
  "background-position"?: BackgroundPositionProperty<TLength>,
  "background-position-x"?: BackgroundPositionXProperty<TLength>,
  "background-position-y"?: BackgroundPositionYProperty<TLength>,
  "background-repeat"?: BackgroundRepeatProperty,
  "background-size"?: BackgroundSizeProperty<TLength>,
  "block-overflow"?: BlockOverflowProperty,
  "block-size"?: BlockSizeProperty<TLength>,
  "border-block-end-color"?: BorderBlockEndColorProperty,
  "border-block-end-style"?: BorderBlockEndStyleProperty,
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength>,
  "border-block-start-color"?: BorderBlockStartColorProperty,
  "border-block-start-style"?: BorderBlockStartStyleProperty,
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength>,
  "border-bottom-color"?: BorderBottomColorProperty,
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>,
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>,
  "border-bottom-style"?: BorderBottomStyleProperty,
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>,
  "border-collapse"?: BorderCollapseProperty,
  "border-image-outset"?: BorderImageOutsetProperty<TLength>,
  "border-image-repeat"?: BorderImageRepeatProperty,
  "border-image-slice"?: BorderImageSliceProperty,
  "border-image-source"?: BorderImageSourceProperty,
  "border-image-width"?: BorderImageWidthProperty<TLength>,
  "border-inline-end-color"?: BorderInlineEndColorProperty,
  "border-inline-end-style"?: BorderInlineEndStyleProperty,
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength>,
  "border-inline-start-color"?: BorderInlineStartColorProperty,
  "border-inline-start-style"?: BorderInlineStartStyleProperty,
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength>,
  "border-left-color"?: BorderLeftColorProperty,
  "border-left-style"?: BorderLeftStyleProperty,
  "border-left-width"?: BorderLeftWidthProperty<TLength>,
  "border-right-color"?: BorderRightColorProperty,
  "border-right-style"?: BorderRightStyleProperty,
  "border-right-width"?: BorderRightWidthProperty<TLength>,
  "border-spacing"?: BorderSpacingProperty<TLength>,
  "border-top-color"?: BorderTopColorProperty,
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>,
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>,
  "border-top-style"?: BorderTopStyleProperty,
  "border-top-width"?: BorderTopWidthProperty<TLength>,
  bottom?: BottomProperty<TLength>,
  "box-align"?: BoxAlignProperty,
  "box-decoration-break"?: BoxDecorationBreakProperty,
  "box-flex-group"?: GlobalsNumber,
  "box-lines"?: BoxLinesProperty,
  "box-ordinal-group"?: GlobalsNumber,
  "box-shadow"?: BoxShadowProperty,
  "box-sizing"?: BoxSizingProperty,
  "break-after"?: BreakAfterProperty,
  "break-before"?: BreakBeforeProperty,
  "break-inside"?: BreakInsideProperty,
  "caption-side"?: CaptionSideProperty,
  "caret-color"?: CaretColorProperty,
  clear?: ClearProperty,
  "clip-path"?: ClipPathProperty,
  color?: ColorProperty,
  "color-adjust"?: ColorAdjustProperty,
  "column-count"?: ColumnCountProperty,
  "column-fill"?: ColumnFillProperty,
  "column-gap"?: ColumnGapProperty<TLength>,
  "column-rule-color"?: ColumnRuleColorProperty,
  "column-rule-style"?: ColumnRuleStyleProperty,
  "column-rule-width"?: ColumnRuleWidthProperty<TLength>,
  "column-span"?: ColumnSpanProperty,
  "column-width"?: ColumnWidthProperty<TLength>,
  contain?: ContainProperty,
  content?: ContentProperty,
  "counter-increment"?: CounterIncrementProperty,
  "counter-reset"?: CounterResetProperty,
  cursor?: CursorProperty,
  direction?: DirectionProperty,
  display?: DisplayProperty,
  "empty-cells"?: EmptyCellsProperty,
  filter?: FilterProperty,
  "flex-basis"?: FlexBasisProperty<TLength>,
  "flex-direction"?: FlexDirectionProperty,
  "flex-grow"?: GlobalsNumber,
  "flex-shrink"?: GlobalsNumber,
  "flex-wrap"?: FlexWrapProperty,
  float?: FloatProperty,
  "font-family"?: FontFamilyProperty,
  "font-feature-settings"?: FontFeatureSettingsProperty,
  "font-kerning"?: FontKerningProperty,
  "font-language-override"?: FontLanguageOverrideProperty,
  "font-size"?: FontSizeProperty<TLength>,
  "font-size-adjust"?: FontSizeAdjustProperty,
  "font-stretch"?: FontStretchProperty,
  "font-style"?: FontStyleProperty,
  "font-synthesis"?: FontSynthesisProperty,
  "font-variant"?: FontVariantProperty,
  "font-variant-caps"?: FontVariantCapsProperty,
  "font-variant-east-asian"?: FontVariantEastAsianProperty,
  "font-variant-ligatures"?: FontVariantLigaturesProperty,
  "font-variant-numeric"?: FontVariantNumericProperty,
  "font-variant-position"?: FontVariantPositionProperty,
  "font-variation-settings"?: FontVariationSettingsProperty,
  "font-weight"?: FontWeightProperty,
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength>,
  "grid-auto-flow"?: GridAutoFlowProperty,
  "grid-auto-rows"?: GridAutoRowsProperty<TLength>,
  "grid-column-end"?: GridColumnEndProperty,
  "grid-column-start"?: GridColumnStartProperty,
  "grid-row-end"?: GridRowEndProperty,
  "grid-row-start"?: GridRowStartProperty,
  "grid-template-areas"?: GridTemplateAreasProperty,
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength>,
  "grid-template-rows"?: GridTemplateRowsProperty<TLength>,
  "hanging-punctuation"?: HangingPunctuationProperty,
  height?: HeightProperty<TLength>,
  hyphens?: HyphensProperty,
  "image-orientation"?: ImageOrientationProperty,
  "image-rendering"?: ImageRenderingProperty,
  "image-resolution"?: ImageResolutionProperty,
  "initial-letter"?: InitialLetterProperty,
  "initial-letter-align"?: InitialLetterAlignProperty,
  "inline-size"?: InlineSizeProperty<TLength>,
  isolation?: IsolationProperty,
  "justify-content"?: JustifyContentProperty,
  "justify-items"?: JustifyItemsProperty,
  "justify-self"?: JustifySelfProperty,
  left?: LeftProperty<TLength>,
  "letter-spacing"?: LetterSpacingProperty<TLength>,
  "line-break"?: LineBreakProperty,
  "line-height"?: LineHeightProperty<TLength>,
  "line-height-step"?: LineHeightStepProperty<TLength>,
  "list-style-image"?: ListStyleImageProperty,
  "list-style-position"?: ListStylePositionProperty,
  "list-style-type"?: ListStyleTypeProperty,
  "margin-block-end"?: MarginBlockEndProperty<TLength>,
  "margin-block-start"?: MarginBlockStartProperty<TLength>,
  "margin-bottom"?: MarginBottomProperty<TLength>,
  "margin-inline-end"?: MarginInlineEndProperty<TLength>,
  "margin-inline-start"?: MarginInlineStartProperty<TLength>,
  "margin-left"?: MarginLeftProperty<TLength>,
  "margin-right"?: MarginRightProperty<TLength>,
  "margin-top"?: MarginTopProperty<TLength>,
  "mask-border-mode"?: MaskBorderModeProperty,
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength>,
  "mask-border-repeat"?: MaskBorderRepeatProperty,
  "mask-border-slice"?: MaskBorderSliceProperty,
  "mask-border-source"?: MaskBorderSourceProperty,
  "mask-border-width"?: MaskBorderWidthProperty<TLength>,
  "mask-clip"?: MaskClipProperty,
  "mask-composite"?: MaskCompositeProperty,
  "mask-image"?: MaskImageProperty,
  "mask-mode"?: MaskModeProperty,
  "mask-origin"?: MaskOriginProperty,
  "mask-position"?: MaskPositionProperty<TLength>,
  "mask-repeat"?: MaskRepeatProperty,
  "mask-size"?: MaskSizeProperty<TLength>,
  "mask-type"?: MaskTypeProperty,
  "max-block-size"?: MaxBlockSizeProperty<TLength>,
  "max-height"?: MaxHeightProperty<TLength>,
  "max-inline-size"?: MaxInlineSizeProperty<TLength>,
  "max-lines"?: MaxLinesProperty,
  "max-width"?: MaxWidthProperty<TLength>,
  "min-block-size"?: MinBlockSizeProperty<TLength>,
  "min-height"?: MinHeightProperty<TLength>,
  "min-inline-size"?: MinInlineSizeProperty<TLength>,
  "min-width"?: MinWidthProperty<TLength>,
  "mix-blend-mode"?: MixBlendModeProperty,
  "motion-distance"?: OffsetDistanceProperty<TLength>,
  "motion-path"?: OffsetPathProperty,
  "motion-rotation"?: OffsetRotateProperty,
  "object-fit"?: ObjectFitProperty,
  "object-position"?: ObjectPositionProperty<TLength>,
  "offset-anchor"?: OffsetAnchorProperty<TLength>,
  "offset-block-end"?: OffsetBlockEndProperty<TLength>,
  "offset-block-start"?: OffsetBlockStartProperty<TLength>,
  "offset-distance"?: OffsetDistanceProperty<TLength>,
  "offset-inline-end"?: OffsetInlineEndProperty<TLength>,
  "offset-inline-start"?: OffsetInlineStartProperty<TLength>,
  "offset-path"?: OffsetPathProperty,
  "offset-position"?: OffsetPositionProperty<TLength>,
  "offset-rotate"?: OffsetRotateProperty,
  "offset-rotation"?: OffsetRotateProperty,
  opacity?: GlobalsNumber,
  order?: GlobalsNumber,
  orphans?: GlobalsNumber,
  "outline-color"?: OutlineColorProperty,
  "outline-offset"?: OutlineOffsetProperty<TLength>,
  "outline-style"?: OutlineStyleProperty,
  "outline-width"?: OutlineWidthProperty<TLength>,
  overflow?: OverflowProperty,
  "overflow-anchor"?: OverflowAnchorProperty,
  "overflow-block"?: OverflowBlockProperty,
  "overflow-clip-box"?: OverflowClipBoxProperty,
  "overflow-inline"?: OverflowInlineProperty,
  "overflow-wrap"?: OverflowWrapProperty,
  "overflow-x"?: OverflowXProperty,
  "overflow-y"?: OverflowYProperty,
  "overscroll-behavior"?: OverscrollBehaviorProperty,
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty,
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty,
  "padding-block-end"?: PaddingBlockEndProperty<TLength>,
  "padding-block-start"?: PaddingBlockStartProperty<TLength>,
  "padding-bottom"?: PaddingBottomProperty<TLength>,
  "padding-inline-end"?: PaddingInlineEndProperty<TLength>,
  "padding-inline-start"?: PaddingInlineStartProperty<TLength>,
  "padding-left"?: PaddingLeftProperty<TLength>,
  "padding-right"?: PaddingRightProperty<TLength>,
  "padding-top"?: PaddingTopProperty<TLength>,
  "page-break-after"?: PageBreakAfterProperty,
  "page-break-before"?: PageBreakBeforeProperty,
  "page-break-inside"?: PageBreakInsideProperty,
  "paint-order"?: PaintOrderProperty,
  perspective?: PerspectiveProperty<TLength>,
  "perspective-origin"?: PerspectiveOriginProperty<TLength>,
  "place-content"?: PlaceContentProperty,
  "pointer-events"?: PointerEventsProperty,
  position?: PositionProperty,
  quotes?: QuotesProperty,
  resize?: ResizeProperty,
  right?: RightProperty<TLength>,
  rotate?: RotateProperty,
  "row-gap"?: RowGapProperty<TLength>,
  "ruby-align"?: RubyAlignProperty,
  "ruby-merge"?: RubyMergeProperty,
  "ruby-position"?: RubyPositionProperty,
  scale?: ScaleProperty,
  "scroll-behavior"?: ScrollBehaviorProperty,
  "scroll-snap-type"?: ScrollSnapTypeProperty,
  "shape-image-threshold"?: GlobalsNumber,
  "shape-margin"?: ShapeMarginProperty<TLength>,
  "shape-outside"?: ShapeOutsideProperty,
  "tab-size"?: TabSizeProperty<TLength>,
  "table-layout"?: TableLayoutProperty,
  "text-align"?: TextAlignProperty,
  "text-align-last"?: TextAlignLastProperty,
  "text-combine-upright"?: TextCombineUprightProperty,
  "text-decoration-color"?: TextDecorationColorProperty,
  "text-decoration-line"?: TextDecorationLineProperty,
  "text-decoration-skip"?: TextDecorationSkipProperty,
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty,
  "text-decoration-style"?: TextDecorationStyleProperty,
  "text-emphasis-color"?: TextEmphasisColorProperty,
  "text-emphasis-position"?: GlobalsString,
  "text-emphasis-style"?: TextEmphasisStyleProperty,
  "text-indent"?: TextIndentProperty<TLength>,
  "text-justify"?: TextJustifyProperty,
  "text-orientation"?: TextOrientationProperty,
  "text-overflow"?: TextOverflowProperty,
  "text-rendering"?: TextRenderingProperty,
  "text-shadow"?: TextShadowProperty,
  "text-size-adjust"?: TextSizeAdjustProperty,
  "text-transform"?: TextTransformProperty,
  "text-underline-position"?: TextUnderlinePositionProperty,
  top?: TopProperty<TLength>,
  "touch-action"?: TouchActionProperty,
  transform?: TransformProperty,
  "transform-box"?: TransformBoxProperty,
  "transform-origin"?: TransformOriginProperty<TLength>,
  "transform-style"?: TransformStyleProperty,
  "transition-delay"?: GlobalsString,
  "transition-duration"?: GlobalsString,
  "transition-property"?: TransitionPropertyProperty,
  "transition-timing-function"?: TransitionTimingFunctionProperty,
  translate?: TranslateProperty<TLength>,
  "unicode-bidi"?: UnicodeBidiProperty,
  "user-select"?: UserSelectProperty,
  "vertical-align"?: VerticalAlignProperty<TLength>,
  visibility?: VisibilityProperty,
  "white-space"?: WhiteSpaceProperty,
  widows?: GlobalsNumber,
  width?: WidthProperty<TLength>,
  "will-change"?: WillChangeProperty,
  "word-break"?: WordBreakProperty,
  "word-spacing"?: WordSpacingProperty<TLength>,
  "word-wrap"?: WordWrapProperty,
  "writing-mode"?: WritingModeProperty,
  "z-index"?: ZIndexProperty,
  zoom?: ZoomProperty,
};

declare export type StandardShorthandPropertiesHyphen<TLength = string | 0> = {
  all?: Globals,
  animation?: AnimationProperty,
  background?: BackgroundProperty<TLength>,
  border?: BorderProperty<TLength>,
  "border-block-end"?: BorderBlockEndProperty<TLength>,
  "border-block-start"?: BorderBlockStartProperty<TLength>,
  "border-bottom"?: BorderBottomProperty<TLength>,
  "border-color"?: BorderColorProperty,
  "border-image"?: BorderImageProperty,
  "border-inline-end"?: BorderInlineEndProperty<TLength>,
  "border-inline-start"?: BorderInlineStartProperty<TLength>,
  "border-left"?: BorderLeftProperty<TLength>,
  "border-radius"?: BorderRadiusProperty<TLength>,
  "border-right"?: BorderRightProperty<TLength>,
  "border-style"?: BorderStyleProperty,
  "border-top"?: BorderTopProperty<TLength>,
  "border-width"?: BorderWidthProperty<TLength>,
  "column-rule"?: ColumnRuleProperty<TLength>,
  columns?: ColumnsProperty<TLength>,
  flex?: FlexProperty<TLength>,
  "flex-flow"?: FlexFlowProperty,
  font?: FontProperty,
  gap?: GapProperty<TLength>,
  grid?: GridProperty,
  "grid-area"?: GridAreaProperty,
  "grid-column"?: GridColumnProperty,
  "grid-row"?: GridRowProperty,
  "grid-template"?: GridTemplateProperty,
  "line-clamp"?: LineClampProperty,
  "list-style"?: ListStyleProperty,
  margin?: MarginProperty<TLength>,
  mask?: MaskProperty<TLength>,
  "mask-border"?: MaskBorderProperty,
  motion?: OffsetProperty<TLength>,
  offset?: OffsetProperty<TLength>,
  outline?: OutlineProperty<TLength>,
  padding?: PaddingProperty<TLength>,
  "text-decoration"?: TextDecorationProperty,
  "text-emphasis"?: TextEmphasisProperty,
  transition?: TransitionProperty,
};

declare export type StandardPropertiesHyphen<TLength = string | 0> = StandardLonghandPropertiesHyphen<TLength> & StandardShorthandPropertiesHyphen<TLength>;

declare export type VendorLonghandPropertiesHyphen<TLength = string | 0> = {
  "-moz-animation-delay"?: GlobalsString,
  "-moz-animation-direction"?: AnimationDirectionProperty,
  "-moz-animation-duration"?: GlobalsString,
  "-moz-animation-fill-mode"?: AnimationFillModeProperty,
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty,
  "-moz-animation-name"?: AnimationNameProperty,
  "-moz-animation-play-state"?: AnimationPlayStateProperty,
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty,
  "-moz-appearance"?: MozAppearanceProperty,
  "-moz-backface-visibility"?: BackfaceVisibilityProperty,
  "-moz-binding"?: MozBindingProperty,
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty,
  "-moz-border-end-color"?: BorderInlineEndColorProperty,
  "-moz-border-end-style"?: BorderInlineEndStyleProperty,
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength>,
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty,
  "-moz-border-right-colors"?: MozBorderRightColorsProperty,
  "-moz-border-start-color"?: BorderInlineStartColorProperty,
  "-moz-border-start-style"?: BorderInlineStartStyleProperty,
  "-moz-border-top-colors"?: MozBorderTopColorsProperty,
  "-moz-box-sizing"?: BoxSizingProperty,
  "-moz-column-count"?: ColumnCountProperty,
  "-moz-column-fill"?: ColumnFillProperty,
  "-moz-column-gap"?: ColumnGapProperty<TLength>,
  "-moz-column-rule-color"?: ColumnRuleColorProperty,
  "-moz-column-rule-style"?: ColumnRuleStyleProperty,
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength>,
  "-moz-column-width"?: ColumnWidthProperty<TLength>,
  "-moz-context-properties"?: MozContextPropertiesProperty,
  "-moz-float-edge"?: MozFloatEdgeProperty,
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty,
  "-moz-font-language-override"?: FontLanguageOverrideProperty,
  "-moz-force-broken-image-icon"?: GlobalsNumber,
  "-moz-hyphens"?: HyphensProperty,
  "-moz-image-region"?: MozImageRegionProperty,
  "-moz-margin-end"?: MarginInlineEndProperty<TLength>,
  "-moz-margin-start"?: MarginInlineStartProperty<TLength>,
  "-moz-orient"?: MozOrientProperty,
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength>,
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength>,
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength>,
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength>,
  "-moz-padding-end"?: PaddingInlineEndProperty<TLength>,
  "-moz-padding-start"?: PaddingInlineStartProperty<TLength>,
  "-moz-perspective"?: PerspectiveProperty<TLength>,
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength>,
  "-moz-stack-sizing"?: MozStackSizingProperty,
  "-moz-tab-size"?: TabSizeProperty<TLength>,
  "-moz-text-blink"?: MozTextBlinkProperty,
  "-moz-text-size-adjust"?: TextSizeAdjustProperty,
  "-moz-transform-origin"?: TransformOriginProperty<TLength>,
  "-moz-transform-style"?: TransformStyleProperty,
  "-moz-transition-delay"?: GlobalsString,
  "-moz-transition-duration"?: GlobalsString,
  "-moz-transition-property"?: TransitionPropertyProperty,
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty,
  "-moz-user-focus"?: MozUserFocusProperty,
  "-moz-user-input"?: MozUserInputProperty,
  "-moz-user-modify"?: MozUserModifyProperty,
  "-moz-user-select"?: UserSelectProperty,
  "-moz-window-dragging"?: MozWindowDraggingProperty,
  "-moz-window-shadow"?: MozWindowShadowProperty,
  "-ms-accelerator"?: MsAcceleratorProperty,
  "-ms-block-progression"?: MsBlockProgressionProperty,
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty,
  "-ms-content-zoom-limit-max"?: GlobalsString,
  "-ms-content-zoom-limit-min"?: GlobalsString,
  "-ms-content-zoom-snap-points"?: GlobalsString,
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty,
  "-ms-content-zooming"?: MsContentZoomingProperty,
  "-ms-filter"?: GlobalsString,
  "-ms-flex-direction"?: FlexDirectionProperty,
  "-ms-flex-positive"?: GlobalsNumber,
  "-ms-flow-from"?: MsFlowFromProperty,
  "-ms-flow-into"?: MsFlowIntoProperty,
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength>,
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength>,
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty,
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty,
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty,
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength>,
  "-ms-hyphens"?: HyphensProperty,
  "-ms-ime-align"?: MsImeAlignProperty,
  "-ms-line-break"?: LineBreakProperty,
  "-ms-order"?: GlobalsNumber,
  "-ms-overflow-style"?: MsOverflowStyleProperty,
  "-ms-overflow-x"?: OverflowXProperty,
  "-ms-overflow-y"?: OverflowYProperty,
  "-ms-scroll-chaining"?: MsScrollChainingProperty,
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength>,
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength>,
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength>,
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength>,
  "-ms-scroll-rails"?: MsScrollRailsProperty,
  "-ms-scroll-snap-points-x"?: GlobalsString,
  "-ms-scroll-snap-points-y"?: GlobalsString,
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty,
  "-ms-scroll-translation"?: MsScrollTranslationProperty,
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty,
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty,
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty,
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty,
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty,
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty,
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty,
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty,
  "-ms-text-autospace"?: MsTextAutospaceProperty,
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty,
  "-ms-text-overflow"?: TextOverflowProperty,
  "-ms-text-size-adjust"?: TextSizeAdjustProperty,
  "-ms-touch-action"?: TouchActionProperty,
  "-ms-touch-select"?: MsTouchSelectProperty,
  "-ms-transform"?: TransformProperty,
  "-ms-transform-origin"?: TransformOriginProperty<TLength>,
  "-ms-user-select"?: MsUserSelectProperty,
  "-ms-word-break"?: WordBreakProperty,
  "-ms-wrap-flow"?: MsWrapFlowProperty,
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength>,
  "-ms-wrap-through"?: MsWrapThroughProperty,
  "-ms-writing-mode"?: WritingModeProperty,
  "-o-background-size"?: BackgroundSizeProperty<TLength>,
  "-o-object-fit"?: ObjectFitProperty,
  "-o-object-position"?: ObjectPositionProperty<TLength>,
  "-o-tab-size"?: TabSizeProperty<TLength>,
  "-o-text-overflow"?: TextOverflowProperty,
  "-o-transform-origin"?: TransformOriginProperty<TLength>,
  "-webkit-align-content"?: AlignContentProperty,
  "-webkit-align-items"?: AlignItemsProperty,
  "-webkit-align-self"?: AlignSelfProperty,
  "-webkit-animation-delay"?: GlobalsString,
  "-webkit-animation-direction"?: AnimationDirectionProperty,
  "-webkit-animation-duration"?: GlobalsString,
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty,
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty,
  "-webkit-animation-name"?: AnimationNameProperty,
  "-webkit-animation-play-state"?: AnimationPlayStateProperty,
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty,
  "-webkit-appearance"?: AppearanceProperty,
  "-webkit-backdrop-filter"?: BackdropFilterProperty,
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty,
  "-webkit-background-size"?: BackgroundSizeProperty<TLength>,
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty,
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty,
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength>,
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>,
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>,
  "-webkit-border-image-slice"?: BorderImageSliceProperty,
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>,
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>,
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty,
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>,
  "-webkit-box-shadow"?: BoxShadowProperty,
  "-webkit-box-sizing"?: BoxSizingProperty,
  "-webkit-clip-path"?: ClipPathProperty,
  "-webkit-column-count"?: ColumnCountProperty,
  "-webkit-column-gap"?: ColumnGapProperty<TLength>,
  "-webkit-column-rule-color"?: ColumnRuleColorProperty,
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty,
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength>,
  "-webkit-column-span"?: ColumnSpanProperty,
  "-webkit-column-width"?: ColumnWidthProperty<TLength>,
  "-webkit-filter"?: FilterProperty,
  "-webkit-flex-basis"?: FlexBasisProperty<TLength>,
  "-webkit-flex-direction"?: FlexDirectionProperty,
  "-webkit-flex-grow"?: GlobalsNumber,
  "-webkit-flex-shrink"?: GlobalsNumber,
  "-webkit-flex-wrap"?: FlexWrapProperty,
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty,
  "-webkit-font-kerning"?: FontKerningProperty,
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty,
  "-webkit-hyphens"?: HyphensProperty,
  "-webkit-justify-content"?: JustifyContentProperty,
  "-webkit-line-break"?: LineBreakProperty,
  "-webkit-margin-end"?: MarginInlineEndProperty<TLength>,
  "-webkit-margin-start"?: MarginInlineStartProperty<TLength>,
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty,
  "-webkit-mask-clip"?: WebkitMaskClipProperty,
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty,
  "-webkit-mask-image"?: WebkitMaskImageProperty,
  "-webkit-mask-origin"?: WebkitMaskOriginProperty,
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>,
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>,
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>,
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty,
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty,
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty,
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength>,
  "-webkit-order"?: GlobalsNumber,
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty,
  "-webkit-padding-end"?: PaddingInlineEndProperty<TLength>,
  "-webkit-padding-start"?: PaddingInlineStartProperty<TLength>,
  "-webkit-perspective"?: PerspectiveProperty<TLength>,
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength>,
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty,
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength>,
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty,
  "-webkit-text-combine"?: TextCombineUprightProperty,
  "-webkit-text-decoration-color"?: TextDecorationColorProperty,
  "-webkit-text-decoration-line"?: TextDecorationLineProperty,
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty,
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty,
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty,
  "-webkit-text-emphasis-position"?: GlobalsString,
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty,
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty,
  "-webkit-text-orientation"?: TextOrientationProperty,
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty,
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty,
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>,
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty,
  "-webkit-transform"?: TransformProperty,
  "-webkit-transform-origin"?: TransformOriginProperty<TLength>,
  "-webkit-transform-style"?: TransformStyleProperty,
  "-webkit-transition-delay"?: GlobalsString,
  "-webkit-transition-duration"?: GlobalsString,
  "-webkit-transition-property"?: TransitionPropertyProperty,
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty,
  "-webkit-user-modify"?: WebkitUserModifyProperty,
  "-webkit-user-select"?: UserSelectProperty,
  "-webkit-writing-mode"?: WritingModeProperty,
};

declare export type VendorShorthandPropertiesHyphen<TLength = string | 0> = {
  "-moz-animation"?: AnimationProperty,
  "-moz-border-image"?: BorderImageProperty,
  "-moz-column-rule"?: ColumnRuleProperty<TLength>,
  "-moz-columns"?: ColumnsProperty<TLength>,
  "-moz-outline-radius"?: MozOutlineRadiusProperty<TLength>,
  "-moz-transition"?: TransitionProperty,
  "-ms-content-zoom-limit"?: GlobalsString,
  "-ms-content-zoom-snap"?: MsContentZoomSnapProperty,
  "-ms-flex"?: FlexProperty<TLength>,
  "-ms-scroll-limit"?: GlobalsString,
  "-ms-scroll-snap-x"?: GlobalsString,
  "-ms-scroll-snap-y"?: GlobalsString,
  "-o-border-image"?: BorderImageProperty,
  "-webkit-animation"?: AnimationProperty,
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength>,
  "-webkit-border-image"?: BorderImageProperty,
  "-webkit-border-radius"?: BorderRadiusProperty<TLength>,
  "-webkit-column-rule"?: ColumnRuleProperty<TLength>,
  "-webkit-columns"?: ColumnsProperty<TLength>,
  "-webkit-flex"?: FlexProperty<TLength>,
  "-webkit-flex-flow"?: FlexFlowProperty,
  "-webkit-line-clamp"?: WebkitLineClampProperty,
  "-webkit-mask"?: WebkitMaskProperty,
  "-webkit-text-emphasis"?: TextEmphasisProperty,
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>,
  "-webkit-transition"?: TransitionProperty,
};

declare export type VendorPropertiesHyphen<TLength = string | 0> = VendorLonghandPropertiesHyphen<TLength> & VendorShorthandPropertiesHyphen<TLength>;

declare export type ObsoletePropertiesHyphen<TLength = string | 0> = {
  azimuth?: AzimuthProperty,
  "box-direction"?: BoxDirectionProperty,
  "box-flex"?: GlobalsNumber,
  "box-orient"?: BoxOrientProperty,
  "box-pack"?: BoxPackProperty,
  clip?: ClipProperty,
  "font-variant-alternates"?: FontVariantAlternatesProperty,
  "grid-column-gap"?: GridColumnGapProperty<TLength>,
  "grid-gap"?: GridGapProperty<TLength>,
  "grid-row-gap"?: GridRowGapProperty<TLength>,
  "ime-mode"?: ImeModeProperty,
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength>,
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength>,
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty,
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty,
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty,
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty,
  "text-combine-horizontal"?: TextCombineUprightProperty,
  "-khtml-box-direction"?: BoxDirectionProperty,
  "-khtml-box-flex"?: GlobalsNumber,
  "-khtml-box-orient"?: BoxOrientProperty,
  "-khtml-box-pack"?: BoxPackProperty,
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty,
  "-moz-background-size"?: BackgroundSizeProperty<TLength>,
  "-moz-border-radius"?: BorderRadiusProperty<TLength>,
  "-moz-border-radius-bottomleft"?: BorderBottomLeftRadiusProperty<TLength>,
  "-moz-border-radius-bottomright"?: BorderBottomRightRadiusProperty<TLength>,
  "-moz-border-radius-topleft"?: BorderTopLeftRadiusProperty<TLength>,
  "-moz-border-radius-topright"?: BorderTopRightRadiusProperty<TLength>,
  "-moz-box-direction"?: BoxDirectionProperty,
  "-moz-box-flex"?: GlobalsNumber,
  "-moz-box-orient"?: BoxOrientProperty,
  "-moz-box-pack"?: BoxPackProperty,
  "-moz-box-shadow"?: BoxShadowProperty,
  "-moz-opacity"?: GlobalsNumber,
  "-moz-outline"?: OutlineProperty<TLength>,
  "-moz-outline-color"?: OutlineColorProperty,
  "-moz-outline-style"?: OutlineStyleProperty,
  "-moz-outline-width"?: OutlineWidthProperty<TLength>,
  "-moz-resize"?: ResizeProperty,
  "-moz-text-align-last"?: TextAlignLastProperty,
  "-moz-text-decoration-color"?: TextDecorationColorProperty,
  "-moz-text-decoration-line"?: TextDecorationLineProperty,
  "-moz-text-decoration-style"?: TextDecorationStyleProperty,
  "-ms-ime-mode"?: ImeModeProperty,
  "-o-animation"?: AnimationProperty,
  "-o-animation-delay"?: GlobalsString,
  "-o-animation-direction"?: AnimationDirectionProperty,
  "-o-animation-duration"?: GlobalsString,
  "-o-animation-fill-mode"?: AnimationFillModeProperty,
  "-o-animation-iteration-count"?: AnimationIterationCountProperty,
  "-o-animation-name"?: AnimationNameProperty,
  "-o-animation-play-state"?: AnimationPlayStateProperty,
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty,
  "-o-transform"?: TransformProperty,
  "-o-transition"?: TransitionProperty,
  "-o-transition-delay"?: GlobalsString,
  "-o-transition-duration"?: GlobalsString,
  "-o-transition-property"?: TransitionPropertyProperty,
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty,
  "-webkit-box-direction"?: BoxDirectionProperty,
  "-webkit-box-flex"?: GlobalsNumber,
  "-webkit-box-orient"?: BoxOrientProperty,
  "-webkit-box-pack"?: BoxPackProperty,
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty,
  "-webkit-scroll-snap-points-y"?: ScrollSnapPointsYProperty,
};

declare export type SvgPropertiesHyphen<TLength = string | 0> = {
  "alignment-baseline"?: AlignmentBaselineProperty,
  "baseline-shift"?: BaselineShiftProperty<TLength>,
  clip?: ClipProperty,
  "clip-path"?: ClipPathProperty,
  "clip-rule"?: ClipRuleProperty,
  color?: ColorProperty,
  "color-interpolation"?: ColorInterpolationProperty,
  "color-rendering"?: ColorRenderingProperty,
  cursor?: CursorProperty,
  direction?: DirectionProperty,
  display?: DisplayProperty,
  "dominant-baseline"?: DominantBaselineProperty,
  fill?: FillProperty,
  "fill-opacity"?: GlobalsNumber,
  "fill-rule"?: FillRuleProperty,
  filter?: FilterProperty,
  "flood-color"?: FloodColorProperty,
  "flood-opacity"?: GlobalsNumber,
  font?: FontProperty,
  "font-family"?: FontFamilyProperty,
  "font-size"?: FontSizeProperty<TLength>,
  "font-size-adjust"?: FontSizeAdjustProperty,
  "font-stretch"?: FontStretchProperty,
  "font-style"?: FontStyleProperty,
  "font-variant"?: FontVariantProperty,
  "font-weight"?: FontWeightProperty,
  "glyph-orientation-vertical"?: GlyphOrientationVerticalProperty,
  "image-rendering"?: ImageRenderingProperty,
  "letter-spacing"?: LetterSpacingProperty<TLength>,
  "lighting-color"?: LightingColorProperty,
  "line-height"?: LineHeightProperty<TLength>,
  marker?: MarkerProperty,
  "marker-end"?: MarkerEndProperty,
  "marker-mid"?: MarkerMidProperty,
  "marker-start"?: MarkerStartProperty,
  mask?: MaskProperty<TLength>,
  opacity?: GlobalsNumber,
  overflow?: OverflowProperty,
  "paint-order"?: PaintOrderProperty,
  "pointer-events"?: PointerEventsProperty,
  "shape-rendering"?: ShapeRenderingProperty,
  "stop-color"?: StopColorProperty,
  "stop-opacity"?: GlobalsNumber,
  stroke?: StrokeProperty,
  "stroke-dasharray"?: StrokeDasharrayProperty<TLength>,
  "stroke-dashoffset"?: StrokeDashoffsetProperty<TLength>,
  "stroke-linecap"?: StrokeLinecapProperty,
  "stroke-linejoin"?: StrokeLinejoinProperty,
  "stroke-miterlimit"?: GlobalsNumber,
  "stroke-opacity"?: GlobalsNumber,
  "stroke-width"?: StrokeWidthProperty<TLength>,
  "text-anchor"?: TextAnchorProperty,
  "text-decoration"?: TextDecorationProperty,
  "text-rendering"?: TextRenderingProperty,
  "unicode-bidi"?: UnicodeBidiProperty,
  "vector-effect"?: VectorEffectProperty,
  visibility?: VisibilityProperty,
  "white-space"?: WhiteSpaceProperty,
  "word-spacing"?: WordSpacingProperty<TLength>,
  "writing-mode"?: WritingModeProperty,
};

declare export type PropertiesHyphen<TLength = string | 0> = StandardPropertiesHyphen<TLength> &
  VendorPropertiesHyphen<TLength> &
  ObsoletePropertiesHyphen<TLength> &
  SvgPropertiesHyphen<TLength>;

declare export type StandardLonghandPropertiesFallback<TLength = string | 0> = {
  alignContent?: AlignContentProperty | AlignContentProperty[],
  alignItems?: AlignItemsProperty | AlignItemsProperty[],
  alignSelf?: AlignSelfProperty | AlignSelfProperty[],
  animationDelay?: GlobalsString | GlobalsString[],
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
  animationDuration?: GlobalsString | GlobalsString[],
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  animationName?: AnimationNameProperty | AnimationNameProperty[],
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  appearance?: AppearanceProperty | AppearanceProperty[],
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[],
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[],
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[],
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[],
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[],
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[],
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[],
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[],
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[],
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[],
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[],
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[],
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[],
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[],
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[],
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[],
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[],
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[],
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[],
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[],
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[],
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[],
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[],
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[],
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[],
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[],
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[],
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[],
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[],
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[],
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[],
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[],
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[],
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[],
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
  boxAlign?: BoxAlignProperty | BoxAlignProperty[],
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[],
  boxLines?: BoxLinesProperty | BoxLinesProperty[],
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[],
  boxShadow?: BoxShadowProperty | BoxShadowProperty[],
  boxSizing?: BoxSizingProperty | BoxSizingProperty[],
  breakAfter?: BreakAfterProperty | BreakAfterProperty[],
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[],
  breakInside?: BreakInsideProperty | BreakInsideProperty[],
  captionSide?: CaptionSideProperty | CaptionSideProperty[],
  caretColor?: CaretColorProperty | CaretColorProperty[],
  clear?: ClearProperty | ClearProperty[],
  clipPath?: ClipPathProperty | ClipPathProperty[],
  color?: ColorProperty | ColorProperty[],
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[],
  columnCount?: ColumnCountProperty | ColumnCountProperty[],
  columnFill?: ColumnFillProperty | ColumnFillProperty[],
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[],
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  contain?: ContainProperty | ContainProperty[],
  content?: ContentProperty | ContentProperty[],
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[],
  counterReset?: CounterResetProperty | CounterResetProperty[],
  cursor?: CursorProperty | CursorProperty[],
  direction?: DirectionProperty | DirectionProperty[],
  display?: DisplayProperty | DisplayProperty[],
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[],
  filter?: FilterProperty | FilterProperty[],
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[],
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[],
  flexGrow?: GlobalsNumber | GlobalsNumber[],
  flexShrink?: GlobalsNumber | GlobalsNumber[],
  flexWrap?: FlexWrapProperty | FlexWrapProperty[],
  float?: FloatProperty | FloatProperty[],
  fontFamily?: FontFamilyProperty | FontFamilyProperty[],
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  fontKerning?: FontKerningProperty | FontKerningProperty[],
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
  fontStretch?: FontStretchProperty | FontStretchProperty[],
  fontStyle?: FontStyleProperty | FontStyleProperty[],
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[],
  fontVariant?: FontVariantProperty | FontVariantProperty[],
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[],
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[],
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[],
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[],
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[],
  fontWeight?: FontWeightProperty | FontWeightProperty[],
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[],
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[],
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[],
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[],
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[],
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[],
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[],
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[],
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[],
  height?: HeightProperty<TLength> | HeightProperty<TLength>[],
  hyphens?: HyphensProperty | HyphensProperty[],
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[],
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[],
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[],
  initialLetter?: InitialLetterProperty | InitialLetterProperty[],
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[],
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[],
  isolation?: IsolationProperty | IsolationProperty[],
  justifyContent?: JustifyContentProperty | JustifyContentProperty[],
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[],
  justifySelf?: JustifySelfProperty | JustifySelfProperty[],
  left?: LeftProperty<TLength> | LeftProperty<TLength>[],
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
  lineBreak?: LineBreakProperty | LineBreakProperty[],
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[],
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[],
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[],
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[],
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[],
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[],
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[],
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[],
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[],
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[],
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[],
  maskClip?: MaskClipProperty | MaskClipProperty[],
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[],
  maskImage?: MaskImageProperty | MaskImageProperty[],
  maskMode?: MaskModeProperty | MaskModeProperty[],
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[],
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[],
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[],
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[],
  maskType?: MaskTypeProperty | MaskTypeProperty[],
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[],
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[],
  maxLines?: MaxLinesProperty | MaxLinesProperty[],
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[],
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[],
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[],
  motionDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
  motionPath?: OffsetPathProperty | OffsetPathProperty[],
  motionRotation?: OffsetRotateProperty | OffsetRotateProperty[],
  objectFit?: ObjectFitProperty | ObjectFitProperty[],
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
  offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
  offsetBlockEnd?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[],
  offsetBlockStart?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[],
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
  offsetInlineEnd?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[],
  offsetInlineStart?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[],
  offsetPath?: OffsetPathProperty | OffsetPathProperty[],
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[],
  offsetRotation?: OffsetRotateProperty | OffsetRotateProperty[],
  opacity?: GlobalsNumber | GlobalsNumber[],
  order?: GlobalsNumber | GlobalsNumber[],
  orphans?: GlobalsNumber | GlobalsNumber[],
  outlineColor?: OutlineColorProperty | OutlineColorProperty[],
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[],
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
  overflow?: OverflowProperty | OverflowProperty[],
  overflowAnchor?: OverflowAnchorProperty | OverflowAnchorProperty[],
  overflowBlock?: OverflowBlockProperty | OverflowBlockProperty[],
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
  overflowInline?: OverflowInlineProperty | OverflowInlineProperty[],
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[],
  overflowX?: OverflowXProperty | OverflowXProperty[],
  overflowY?: OverflowYProperty | OverflowYProperty[],
  overscrollBehavior?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[],
  overscrollBehaviorX?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[],
  overscrollBehaviorY?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[],
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[],
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[],
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[],
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[],
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[],
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[],
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[],
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[],
  paintOrder?: PaintOrderProperty | PaintOrderProperty[],
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  placeContent?: PlaceContentProperty | PlaceContentProperty[],
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[],
  position?: PositionProperty | PositionProperty[],
  quotes?: QuotesProperty | QuotesProperty[],
  resize?: ResizeProperty | ResizeProperty[],
  right?: RightProperty<TLength> | RightProperty<TLength>[],
  rotate?: RotateProperty | RotateProperty[],
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[],
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[],
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[],
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[],
  scale?: ScaleProperty | ScaleProperty[],
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[],
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[],
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[],
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  tableLayout?: TableLayoutProperty | TableLayoutProperty[],
  textAlign?: TextAlignProperty | TextAlignProperty[],
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[],
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[],
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[],
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[],
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
  textEmphasisPosition?: GlobalsString | GlobalsString[],
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[],
  textJustify?: TextJustifyProperty | TextJustifyProperty[],
  textOrientation?: TextOrientationProperty | TextOrientationProperty[],
  textOverflow?: TextOverflowProperty | TextOverflowProperty[],
  textRendering?: TextRenderingProperty | TextRenderingProperty[],
  textShadow?: TextShadowProperty | TextShadowProperty[],
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  textTransform?: TextTransformProperty | TextTransformProperty[],
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[],
  top?: TopProperty<TLength> | TopProperty<TLength>[],
  touchAction?: TouchActionProperty | TouchActionProperty[],
  transform?: TransformProperty | TransformProperty[],
  transformBox?: TransformBoxProperty | TransformBoxProperty[],
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  transformStyle?: TransformStyleProperty | TransformStyleProperty[],
  transitionDelay?: GlobalsString | GlobalsString[],
  transitionDuration?: GlobalsString | GlobalsString[],
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[],
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[],
  userSelect?: UserSelectProperty | UserSelectProperty[],
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
  visibility?: VisibilityProperty | VisibilityProperty[],
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[],
  widows?: GlobalsNumber | GlobalsNumber[],
  width?: WidthProperty<TLength> | WidthProperty<TLength>[],
  willChange?: WillChangeProperty | WillChangeProperty[],
  wordBreak?: WordBreakProperty | WordBreakProperty[],
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
  wordWrap?: WordWrapProperty | WordWrapProperty[],
  writingMode?: WritingModeProperty | WritingModeProperty[],
  zIndex?: ZIndexProperty | ZIndexProperty[],
  zoom?: ZoomProperty | ZoomProperty[],
};

declare export type StandardShorthandPropertiesFallback<TLength = string | 0> = {
  all?: Globals | Globals[],
  animation?: AnimationProperty | AnimationProperty[],
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
  border?: BorderProperty<TLength> | BorderProperty<TLength>[],
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[],
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[],
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
  borderColor?: BorderColorProperty | BorderColorProperty[],
  borderImage?: BorderImageProperty | BorderImageProperty[],
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[],
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[],
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
  borderStyle?: BorderStyleProperty | BorderStyleProperty[],
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[],
  flexFlow?: FlexFlowProperty | FlexFlowProperty[],
  font?: FontProperty | FontProperty[],
  gap?: GapProperty<TLength> | GapProperty<TLength>[],
  grid?: GridProperty | GridProperty[],
  gridArea?: GridAreaProperty | GridAreaProperty[],
  gridColumn?: GridColumnProperty | GridColumnProperty[],
  gridRow?: GridRowProperty | GridRowProperty[],
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[],
  lineClamp?: LineClampProperty | LineClampProperty[],
  listStyle?: ListStyleProperty | ListStyleProperty[],
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
  maskBorder?: MaskBorderProperty | MaskBorderProperty[],
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[],
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[],
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[],
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
  textDecoration?: TextDecorationProperty | TextDecorationProperty[],
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[],
  transition?: TransitionProperty | TransitionProperty[],
};

declare export type StandardPropertiesFallback<TLength = string | 0> = StandardLonghandPropertiesFallback<TLength> & StandardShorthandPropertiesFallback<TLength>;

declare export type VendorLonghandPropertiesFallback<TLength = string | 0> = {
  MozAnimationDelay?: GlobalsString | GlobalsString[],
  MozAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
  MozAnimationDuration?: GlobalsString | GlobalsString[],
  MozAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
  MozAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  MozAnimationName?: AnimationNameProperty | AnimationNameProperty[],
  MozAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[],
  MozBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  MozBinding?: MozBindingProperty | MozBindingProperty[],
  MozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
  MozBorderEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[],
  MozBorderEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[],
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[],
  MozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
  MozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
  MozBorderStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[],
  MozBorderStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[],
  MozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
  MozBoxSizing?: BoxSizingProperty | BoxSizingProperty[],
  MozColumnCount?: ColumnCountProperty | ColumnCountProperty[],
  MozColumnFill?: ColumnFillProperty | ColumnFillProperty[],
  MozColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  MozColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  MozColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  MozColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  MozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
  MozFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  MozFontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[],
  MozHyphens?: HyphensProperty | HyphensProperty[],
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[],
  MozMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  MozMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  MozOrient?: MozOrientProperty | MozOrientProperty[],
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[],
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[],
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[],
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[],
  MozPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  MozPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  MozPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[],
  MozTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[],
  MozTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  MozTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  MozTransformStyle?: TransformStyleProperty | TransformStyleProperty[],
  MozTransitionDelay?: GlobalsString | GlobalsString[],
  MozTransitionDuration?: GlobalsString | GlobalsString[],
  MozTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[],
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[],
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[],
  MozUserSelect?: UserSelectProperty | UserSelectProperty[],
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[],
  msAccelerator?: MsAcceleratorProperty | MsAcceleratorProperty[],
  msBlockProgression?: MsBlockProgressionProperty | MsBlockProgressionProperty[],
  msContentZoomChaining?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[],
  msContentZoomLimitMax?: GlobalsString | GlobalsString[],
  msContentZoomLimitMin?: GlobalsString | GlobalsString[],
  msContentZoomSnapPoints?: GlobalsString | GlobalsString[],
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[],
  msContentZooming?: MsContentZoomingProperty | MsContentZoomingProperty[],
  msFilter?: GlobalsString | GlobalsString[],
  msFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[],
  msFlexPositive?: GlobalsNumber | GlobalsNumber[],
  msFlowFrom?: MsFlowFromProperty | MsFlowFromProperty[],
  msFlowInto?: MsFlowIntoProperty | MsFlowIntoProperty[],
  msGridColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
  msGridRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
  msHighContrastAdjust?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[],
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[],
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[],
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[],
  msHyphens?: HyphensProperty | HyphensProperty[],
  msImeAlign?: MsImeAlignProperty | MsImeAlignProperty[],
  msLineBreak?: LineBreakProperty | LineBreakProperty[],
  msOrder?: GlobalsNumber | GlobalsNumber[],
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
  msOverflowX?: OverflowXProperty | OverflowXProperty[],
  msOverflowY?: OverflowYProperty | OverflowYProperty[],
  msScrollChaining?: MsScrollChainingProperty | MsScrollChainingProperty[],
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[],
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[],
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[],
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[],
  msScrollRails?: MsScrollRailsProperty | MsScrollRailsProperty[],
  msScrollSnapPointsX?: GlobalsString | GlobalsString[],
  msScrollSnapPointsY?: GlobalsString | GlobalsString[],
  msScrollSnapType?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[],
  msScrollTranslation?: MsScrollTranslationProperty | MsScrollTranslationProperty[],
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[],
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[],
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[],
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[],
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[],
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[],
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[],
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[],
  msTextAutospace?: MsTextAutospaceProperty | MsTextAutospaceProperty[],
  msTextCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[],
  msTextOverflow?: TextOverflowProperty | TextOverflowProperty[],
  msTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  msTouchAction?: TouchActionProperty | TouchActionProperty[],
  msTouchSelect?: MsTouchSelectProperty | MsTouchSelectProperty[],
  msTransform?: TransformProperty | TransformProperty[],
  msTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  msUserSelect?: MsUserSelectProperty | MsUserSelectProperty[],
  msWordBreak?: WordBreakProperty | WordBreakProperty[],
  msWrapFlow?: MsWrapFlowProperty | MsWrapFlowProperty[],
  msWrapMargin?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[],
  msWrapThrough?: MsWrapThroughProperty | MsWrapThroughProperty[],
  msWritingMode?: WritingModeProperty | WritingModeProperty[],
  OBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  OObjectFit?: ObjectFitProperty | ObjectFitProperty[],
  OObjectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
  OTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  OTextOverflow?: TextOverflowProperty | TextOverflowProperty[],
  OTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  WebkitAlignContent?: AlignContentProperty | AlignContentProperty[],
  WebkitAlignItems?: AlignItemsProperty | AlignItemsProperty[],
  WebkitAlignSelf?: AlignSelfProperty | AlignSelfProperty[],
  WebkitAnimationDelay?: GlobalsString | GlobalsString[],
  WebkitAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
  WebkitAnimationDuration?: GlobalsString | GlobalsString[],
  WebkitAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
  WebkitAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  WebkitAnimationName?: AnimationNameProperty | AnimationNameProperty[],
  WebkitAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  WebkitAppearance?: AppearanceProperty | AppearanceProperty[],
  WebkitBackdropFilter?: BackdropFilterProperty | BackdropFilterProperty[],
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[],
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[],
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[],
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  WebkitBorderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[],
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
  WebkitBoxShadow?: BoxShadowProperty | BoxShadowProperty[],
  WebkitBoxSizing?: BoxSizingProperty | BoxSizingProperty[],
  WebkitClipPath?: ClipPathProperty | ClipPathProperty[],
  WebkitColumnCount?: ColumnCountProperty | ColumnCountProperty[],
  WebkitColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  WebkitColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  WebkitColumnSpan?: ColumnSpanProperty | ColumnSpanProperty[],
  WebkitColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  WebkitFilter?: FilterProperty | FilterProperty[],
  WebkitFlexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[],
  WebkitFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[],
  WebkitFlexGrow?: GlobalsNumber | GlobalsNumber[],
  WebkitFlexShrink?: GlobalsNumber | GlobalsNumber[],
  WebkitFlexWrap?: FlexWrapProperty | FlexWrapProperty[],
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  WebkitFontKerning?: FontKerningProperty | FontKerningProperty[],
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
  WebkitHyphens?: HyphensProperty | HyphensProperty[],
  WebkitJustifyContent?: JustifyContentProperty | JustifyContentProperty[],
  WebkitLineBreak?: LineBreakProperty | LineBreakProperty[],
  WebkitMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  WebkitMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
  WebkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
  WebkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[],
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[],
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[],
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[],
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[],
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[],
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[],
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[],
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[],
  WebkitOrder?: GlobalsNumber | GlobalsNumber[],
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[],
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  WebkitPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  WebkitScrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
  WebkitShapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[],
  WebkitTextCombine?: TextCombineUprightProperty | TextCombineUprightProperty[],
  WebkitTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[],
  WebkitTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[],
  WebkitTextDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
  WebkitTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  WebkitTextEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
  WebkitTextEmphasisPosition?: GlobalsString | GlobalsString[],
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
  WebkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[],
  WebkitTextOrientation?: TextOrientationProperty | TextOrientationProperty[],
  WebkitTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
  WebkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  WebkitTransform?: TransformProperty | TransformProperty[],
  WebkitTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  WebkitTransformStyle?: TransformStyleProperty | TransformStyleProperty[],
  WebkitTransitionDelay?: GlobalsString | GlobalsString[],
  WebkitTransitionDuration?: GlobalsString | GlobalsString[],
  WebkitTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  WebkitUserModify?: WebkitUserModifyProperty | WebkitUserModifyProperty[],
  WebkitUserSelect?: UserSelectProperty | UserSelectProperty[],
  WebkitWritingMode?: WritingModeProperty | WritingModeProperty[],
};

declare export type VendorShorthandPropertiesFallback<TLength = string | 0> = {
  MozAnimation?: AnimationProperty | AnimationProperty[],
  MozBorderImage?: BorderImageProperty | BorderImageProperty[],
  MozColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  MozColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[],
  MozTransition?: TransitionProperty | TransitionProperty[],
  msContentZoomLimit?: GlobalsString | GlobalsString[],
  msContentZoomSnap?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[],
  msFlex?: FlexProperty<TLength> | FlexProperty<TLength>[],
  msScrollLimit?: GlobalsString | GlobalsString[],
  msScrollSnapX?: GlobalsString | GlobalsString[],
  msScrollSnapY?: GlobalsString | GlobalsString[],
  OBorderImage?: BorderImageProperty | BorderImageProperty[],
  WebkitAnimation?: AnimationProperty | AnimationProperty[],
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[],
  WebkitBorderImage?: BorderImageProperty | BorderImageProperty[],
  WebkitBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  WebkitColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  WebkitColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  WebkitFlex?: FlexProperty<TLength> | FlexProperty<TLength>[],
  WebkitFlexFlow?: FlexFlowProperty | FlexFlowProperty[],
  WebkitLineClamp?: WebkitLineClampProperty | WebkitLineClampProperty[],
  WebkitMask?: WebkitMaskProperty | WebkitMaskProperty[],
  WebkitTextEmphasis?: TextEmphasisProperty | TextEmphasisProperty[],
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
  WebkitTransition?: TransitionProperty | TransitionProperty[],
};

declare export type VendorPropertiesFallback<TLength = string | 0> = VendorLonghandPropertiesFallback<TLength> & VendorShorthandPropertiesFallback<TLength>;

declare export type ObsoletePropertiesFallback<TLength = string | 0> = {
  azimuth?: AzimuthProperty | AzimuthProperty[],
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
  boxFlex?: GlobalsNumber | GlobalsNumber[],
  boxOrient?: BoxOrientProperty | BoxOrientProperty[],
  boxPack?: BoxPackProperty | BoxPackProperty[],
  clip?: ClipProperty | ClipProperty[],
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[],
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[],
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
  imeMode?: ImeModeProperty | ImeModeProperty[],
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[],
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[],
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[],
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[],
  textCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[],
  KhtmlBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
  KhtmlBoxFlex?: GlobalsNumber | GlobalsNumber[],
  KhtmlBoxOrient?: BoxOrientProperty | BoxOrientProperty[],
  KhtmlBoxPack?: BoxPackProperty | BoxPackProperty[],
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  MozBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  MozBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  MozBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
  MozBoxFlex?: GlobalsNumber | GlobalsNumber[],
  MozBoxOrient?: BoxOrientProperty | BoxOrientProperty[],
  MozBoxPack?: BoxPackProperty | BoxPackProperty[],
  MozBoxShadow?: BoxShadowProperty | BoxShadowProperty[],
  MozOpacity?: GlobalsNumber | GlobalsNumber[],
  MozOutline?: OutlineProperty<TLength> | OutlineProperty<TLength>[],
  MozOutlineColor?: OutlineColorProperty | OutlineColorProperty[],
  MozOutlineStyle?: OutlineStyleProperty | OutlineStyleProperty[],
  MozOutlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
  MozResize?: ResizeProperty | ResizeProperty[],
  MozTextAlignLast?: TextAlignLastProperty | TextAlignLastProperty[],
  MozTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[],
  MozTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[],
  MozTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  msImeMode?: ImeModeProperty | ImeModeProperty[],
  OAnimation?: AnimationProperty | AnimationProperty[],
  OAnimationDelay?: GlobalsString | GlobalsString[],
  OAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
  OAnimationDuration?: GlobalsString | GlobalsString[],
  OAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
  OAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  OAnimationName?: AnimationNameProperty | AnimationNameProperty[],
  OAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  OAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  OTransform?: TransformProperty | TransformProperty[],
  OTransition?: TransitionProperty | TransitionProperty[],
  OTransitionDelay?: GlobalsString | GlobalsString[],
  OTransitionDuration?: GlobalsString | GlobalsString[],
  OTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
  OTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  WebkitBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
  WebkitBoxFlex?: GlobalsNumber | GlobalsNumber[],
  WebkitBoxOrient?: BoxOrientProperty | BoxOrientProperty[],
  WebkitBoxPack?: BoxPackProperty | BoxPackProperty[],
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
};

declare export type SvgPropertiesFallback<TLength = string | 0> = {
  alignmentBaseline?: AlignmentBaselineProperty | AlignmentBaselineProperty[],
  baselineShift?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[],
  clip?: ClipProperty | ClipProperty[],
  clipPath?: ClipPathProperty | ClipPathProperty[],
  clipRule?: ClipRuleProperty | ClipRuleProperty[],
  color?: ColorProperty | ColorProperty[],
  colorInterpolation?: ColorInterpolationProperty | ColorInterpolationProperty[],
  colorRendering?: ColorRenderingProperty | ColorRenderingProperty[],
  cursor?: CursorProperty | CursorProperty[],
  direction?: DirectionProperty | DirectionProperty[],
  display?: DisplayProperty | DisplayProperty[],
  dominantBaseline?: DominantBaselineProperty | DominantBaselineProperty[],
  fill?: FillProperty | FillProperty[],
  fillOpacity?: GlobalsNumber | GlobalsNumber[],
  fillRule?: FillRuleProperty | FillRuleProperty[],
  filter?: FilterProperty | FilterProperty[],
  floodColor?: FloodColorProperty | FloodColorProperty[],
  floodOpacity?: GlobalsNumber | GlobalsNumber[],
  font?: FontProperty | FontProperty[],
  fontFamily?: FontFamilyProperty | FontFamilyProperty[],
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
  fontStretch?: FontStretchProperty | FontStretchProperty[],
  fontStyle?: FontStyleProperty | FontStyleProperty[],
  fontVariant?: FontVariantProperty | FontVariantProperty[],
  fontWeight?: FontWeightProperty | FontWeightProperty[],
  glyphOrientationVertical?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[],
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[],
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
  lightingColor?: LightingColorProperty | LightingColorProperty[],
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
  marker?: MarkerProperty | MarkerProperty[],
  markerEnd?: MarkerEndProperty | MarkerEndProperty[],
  markerMid?: MarkerMidProperty | MarkerMidProperty[],
  markerStart?: MarkerStartProperty | MarkerStartProperty[],
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
  opacity?: GlobalsNumber | GlobalsNumber[],
  overflow?: OverflowProperty | OverflowProperty[],
  paintOrder?: PaintOrderProperty | PaintOrderProperty[],
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[],
  shapeRendering?: ShapeRenderingProperty | ShapeRenderingProperty[],
  stopColor?: StopColorProperty | StopColorProperty[],
  stopOpacity?: GlobalsNumber | GlobalsNumber[],
  stroke?: StrokeProperty | StrokeProperty[],
  strokeDasharray?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[],
  strokeDashoffset?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[],
  strokeLinecap?: StrokeLinecapProperty | StrokeLinecapProperty[],
  strokeLinejoin?: StrokeLinejoinProperty | StrokeLinejoinProperty[],
  strokeMiterlimit?: GlobalsNumber | GlobalsNumber[],
  strokeOpacity?: GlobalsNumber | GlobalsNumber[],
  strokeWidth?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[],
  textAnchor?: TextAnchorProperty | TextAnchorProperty[],
  textDecoration?: TextDecorationProperty | TextDecorationProperty[],
  textRendering?: TextRenderingProperty | TextRenderingProperty[],
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[],
  vectorEffect?: VectorEffectProperty | VectorEffectProperty[],
  visibility?: VisibilityProperty | VisibilityProperty[],
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[],
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
  writingMode?: WritingModeProperty | WritingModeProperty[],
};

declare export type PropertiesFallback<TLength = string | 0> = StandardPropertiesFallback<TLength> &
  VendorPropertiesFallback<TLength> &
  ObsoletePropertiesFallback<TLength> &
  SvgPropertiesFallback<TLength>;

declare export type StandardLonghandPropertiesHyphenFallback<TLength = string | 0> = {
  "align-content"?: AlignContentProperty | AlignContentProperty[],
  "align-items"?: AlignItemsProperty | AlignItemsProperty[],
  "align-self"?: AlignSelfProperty | AlignSelfProperty[],
  "animation-delay"?: GlobalsString | GlobalsString[],
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
  "animation-duration"?: GlobalsString | GlobalsString[],
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[],
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  appearance?: AppearanceProperty | AppearanceProperty[],
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[],
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[],
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[],
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[],
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[],
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[],
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[],
  "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[],
  "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[],
  "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[],
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[],
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  "block-overflow"?: BlockOverflowProperty | BlockOverflowProperty[],
  "block-size"?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[],
  "border-block-end-color"?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[],
  "border-block-end-style"?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[],
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[],
  "border-block-start-color"?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[],
  "border-block-start-style"?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[],
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[],
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[],
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[],
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
  "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[],
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[],
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
  "border-inline-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[],
  "border-inline-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[],
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[],
  "border-inline-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[],
  "border-inline-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[],
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[],
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[],
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[],
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[],
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
  "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[],
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[],
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
  "box-align"?: BoxAlignProperty | BoxAlignProperty[],
  "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  "box-flex-group"?: GlobalsNumber | GlobalsNumber[],
  "box-lines"?: BoxLinesProperty | BoxLinesProperty[],
  "box-ordinal-group"?: GlobalsNumber | GlobalsNumber[],
  "box-shadow"?: BoxShadowProperty | BoxShadowProperty[],
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[],
  "break-after"?: BreakAfterProperty | BreakAfterProperty[],
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[],
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[],
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[],
  "caret-color"?: CaretColorProperty | CaretColorProperty[],
  clear?: ClearProperty | ClearProperty[],
  "clip-path"?: ClipPathProperty | ClipPathProperty[],
  color?: ColorProperty | ColorProperty[],
  "color-adjust"?: ColorAdjustProperty | ColorAdjustProperty[],
  "column-count"?: ColumnCountProperty | ColumnCountProperty[],
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[],
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  "column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  "column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[],
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  contain?: ContainProperty | ContainProperty[],
  content?: ContentProperty | ContentProperty[],
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[],
  "counter-reset"?: CounterResetProperty | CounterResetProperty[],
  cursor?: CursorProperty | CursorProperty[],
  direction?: DirectionProperty | DirectionProperty[],
  display?: DisplayProperty | DisplayProperty[],
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[],
  filter?: FilterProperty | FilterProperty[],
  "flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[],
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[],
  "flex-grow"?: GlobalsNumber | GlobalsNumber[],
  "flex-shrink"?: GlobalsNumber | GlobalsNumber[],
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[],
  float?: FloatProperty | FloatProperty[],
  "font-family"?: FontFamilyProperty | FontFamilyProperty[],
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  "font-kerning"?: FontKerningProperty | FontKerningProperty[],
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
  "font-stretch"?: FontStretchProperty | FontStretchProperty[],
  "font-style"?: FontStyleProperty | FontStyleProperty[],
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[],
  "font-variant"?: FontVariantProperty | FontVariantProperty[],
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[],
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[],
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[],
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[],
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[],
  "font-weight"?: FontWeightProperty | FontWeightProperty[],
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[],
  "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[],
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[],
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[],
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[],
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[],
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[],
  "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[],
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[],
  height?: HeightProperty<TLength> | HeightProperty<TLength>[],
  hyphens?: HyphensProperty | HyphensProperty[],
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[],
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[],
  "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[],
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[],
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[],
  "inline-size"?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[],
  isolation?: IsolationProperty | IsolationProperty[],
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[],
  "justify-items"?: JustifyItemsProperty | JustifyItemsProperty[],
  "justify-self"?: JustifySelfProperty | JustifySelfProperty[],
  left?: LeftProperty<TLength> | LeftProperty<TLength>[],
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
  "line-break"?: LineBreakProperty | LineBreakProperty[],
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[],
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[],
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[],
  "margin-block-end"?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[],
  "margin-block-start"?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[],
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
  "margin-inline-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  "margin-inline-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
  "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
  "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[],
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[],
  "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[],
  "mask-border-slice"?: MaskBorderSliceProperty | MaskBorderSliceProperty[],
  "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[],
  "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[],
  "mask-clip"?: MaskClipProperty | MaskClipProperty[],
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[],
  "mask-image"?: MaskImageProperty | MaskImageProperty[],
  "mask-mode"?: MaskModeProperty | MaskModeProperty[],
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[],
  "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[],
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[],
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[],
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[],
  "max-block-size"?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[],
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
  "max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[],
  "max-lines"?: MaxLinesProperty | MaxLinesProperty[],
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
  "min-block-size"?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[],
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
  "min-inline-size"?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[],
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[],
  "motion-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
  "motion-path"?: OffsetPathProperty | OffsetPathProperty[],
  "motion-rotation"?: OffsetRotateProperty | OffsetRotateProperty[],
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[],
  "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
  "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
  "offset-block-end"?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[],
  "offset-block-start"?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[],
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
  "offset-inline-end"?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[],
  "offset-inline-start"?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[],
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[],
  "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[],
  "offset-rotation"?: OffsetRotateProperty | OffsetRotateProperty[],
  opacity?: GlobalsNumber | GlobalsNumber[],
  order?: GlobalsNumber | GlobalsNumber[],
  orphans?: GlobalsNumber | GlobalsNumber[],
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[],
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[],
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
  overflow?: OverflowProperty | OverflowProperty[],
  "overflow-anchor"?: OverflowAnchorProperty | OverflowAnchorProperty[],
  "overflow-block"?: OverflowBlockProperty | OverflowBlockProperty[],
  "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
  "overflow-inline"?: OverflowInlineProperty | OverflowInlineProperty[],
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[],
  "overflow-x"?: OverflowXProperty | OverflowXProperty[],
  "overflow-y"?: OverflowYProperty | OverflowYProperty[],
  "overscroll-behavior"?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[],
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[],
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[],
  "padding-block-end"?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[],
  "padding-block-start"?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[],
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
  "padding-inline-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  "padding-inline-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[],
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[],
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[],
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[],
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[],
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[],
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[],
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  "place-content"?: PlaceContentProperty | PlaceContentProperty[],
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[],
  position?: PositionProperty | PositionProperty[],
  quotes?: QuotesProperty | QuotesProperty[],
  resize?: ResizeProperty | ResizeProperty[],
  right?: RightProperty<TLength> | RightProperty<TLength>[],
  rotate?: RotateProperty | RotateProperty[],
  "row-gap"?: RowGapProperty<TLength> | RowGapProperty<TLength>[],
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[],
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[],
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[],
  scale?: ScaleProperty | ScaleProperty[],
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[],
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
  "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[],
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[],
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[],
  "text-align"?: TextAlignProperty | TextAlignProperty[],
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[],
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[],
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[],
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[],
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
  "text-emphasis-position"?: GlobalsString | GlobalsString[],
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
  "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[],
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[],
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[],
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[],
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[],
  "text-shadow"?: TextShadowProperty | TextShadowProperty[],
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  "text-transform"?: TextTransformProperty | TextTransformProperty[],
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[],
  top?: TopProperty<TLength> | TopProperty<TLength>[],
  "touch-action"?: TouchActionProperty | TouchActionProperty[],
  transform?: TransformProperty | TransformProperty[],
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[],
  "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[],
  "transition-delay"?: GlobalsString | GlobalsString[],
  "transition-duration"?: GlobalsString | GlobalsString[],
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[],
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[],
  "user-select"?: UserSelectProperty | UserSelectProperty[],
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
  visibility?: VisibilityProperty | VisibilityProperty[],
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[],
  widows?: GlobalsNumber | GlobalsNumber[],
  width?: WidthProperty<TLength> | WidthProperty<TLength>[],
  "will-change"?: WillChangeProperty | WillChangeProperty[],
  "word-break"?: WordBreakProperty | WordBreakProperty[],
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
  "word-wrap"?: WordWrapProperty | WordWrapProperty[],
  "writing-mode"?: WritingModeProperty | WritingModeProperty[],
  "z-index"?: ZIndexProperty | ZIndexProperty[],
  zoom?: ZoomProperty | ZoomProperty[],
};

declare export type StandardShorthandPropertiesHyphenFallback<TLength = string | 0> = {
  all?: Globals | Globals[],
  animation?: AnimationProperty | AnimationProperty[],
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
  border?: BorderProperty<TLength> | BorderProperty<TLength>[],
  "border-block-end"?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[],
  "border-block-start"?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[],
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
  "border-color"?: BorderColorProperty | BorderColorProperty[],
  "border-image"?: BorderImageProperty | BorderImageProperty[],
  "border-inline-end"?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[],
  "border-inline-start"?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[],
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
  "border-style"?: BorderStyleProperty | BorderStyleProperty[],
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
  "column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[],
  "flex-flow"?: FlexFlowProperty | FlexFlowProperty[],
  font?: FontProperty | FontProperty[],
  gap?: GapProperty<TLength> | GapProperty<TLength>[],
  grid?: GridProperty | GridProperty[],
  "grid-area"?: GridAreaProperty | GridAreaProperty[],
  "grid-column"?: GridColumnProperty | GridColumnProperty[],
  "grid-row"?: GridRowProperty | GridRowProperty[],
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[],
  "line-clamp"?: LineClampProperty | LineClampProperty[],
  "list-style"?: ListStyleProperty | ListStyleProperty[],
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
  "mask-border"?: MaskBorderProperty | MaskBorderProperty[],
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[],
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[],
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[],
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[],
  "text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[],
  transition?: TransitionProperty | TransitionProperty[],
};

declare export type StandardPropertiesHyphenFallback<TLength = string | 0> = StandardLonghandPropertiesHyphenFallback<TLength> & StandardShorthandPropertiesHyphenFallback<TLength>;

declare export type VendorLonghandPropertiesHyphenFallback<TLength = string | 0> = {
  "-moz-animation-delay"?: GlobalsString | GlobalsString[],
  "-moz-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
  "-moz-animation-duration"?: GlobalsString | GlobalsString[],
  "-moz-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  "-moz-animation-name"?: AnimationNameProperty | AnimationNameProperty[],
  "-moz-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[],
  "-moz-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  "-moz-binding"?: MozBindingProperty | MozBindingProperty[],
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
  "-moz-border-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[],
  "-moz-border-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[],
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[],
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
  "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
  "-moz-border-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[],
  "-moz-border-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[],
  "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
  "-moz-box-sizing"?: BoxSizingProperty | BoxSizingProperty[],
  "-moz-column-count"?: ColumnCountProperty | ColumnCountProperty[],
  "-moz-column-fill"?: ColumnFillProperty | ColumnFillProperty[],
  "-moz-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  "-moz-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  "-moz-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  "-moz-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
  "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  "-moz-font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
  "-moz-force-broken-image-icon"?: GlobalsNumber | GlobalsNumber[],
  "-moz-hyphens"?: HyphensProperty | HyphensProperty[],
  "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[],
  "-moz-margin-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  "-moz-margin-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  "-moz-orient"?: MozOrientProperty | MozOrientProperty[],
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[],
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[],
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[],
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[],
  "-moz-padding-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  "-moz-padding-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  "-moz-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[],
  "-moz-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[],
  "-moz-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  "-moz-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  "-moz-transform-style"?: TransformStyleProperty | TransformStyleProperty[],
  "-moz-transition-delay"?: GlobalsString | GlobalsString[],
  "-moz-transition-duration"?: GlobalsString | GlobalsString[],
  "-moz-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[],
  "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[],
  "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[],
  "-moz-user-select"?: UserSelectProperty | UserSelectProperty[],
  "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
  "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[],
  "-ms-accelerator"?: MsAcceleratorProperty | MsAcceleratorProperty[],
  "-ms-block-progression"?: MsBlockProgressionProperty | MsBlockProgressionProperty[],
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[],
  "-ms-content-zoom-limit-max"?: GlobalsString | GlobalsString[],
  "-ms-content-zoom-limit-min"?: GlobalsString | GlobalsString[],
  "-ms-content-zoom-snap-points"?: GlobalsString | GlobalsString[],
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[],
  "-ms-content-zooming"?: MsContentZoomingProperty | MsContentZoomingProperty[],
  "-ms-filter"?: GlobalsString | GlobalsString[],
  "-ms-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[],
  "-ms-flex-positive"?: GlobalsNumber | GlobalsNumber[],
  "-ms-flow-from"?: MsFlowFromProperty | MsFlowFromProperty[],
  "-ms-flow-into"?: MsFlowIntoProperty | MsFlowIntoProperty[],
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[],
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[],
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[],
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[],
  "-ms-hyphens"?: HyphensProperty | HyphensProperty[],
  "-ms-ime-align"?: MsImeAlignProperty | MsImeAlignProperty[],
  "-ms-line-break"?: LineBreakProperty | LineBreakProperty[],
  "-ms-order"?: GlobalsNumber | GlobalsNumber[],
  "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
  "-ms-overflow-x"?: OverflowXProperty | OverflowXProperty[],
  "-ms-overflow-y"?: OverflowYProperty | OverflowYProperty[],
  "-ms-scroll-chaining"?: MsScrollChainingProperty | MsScrollChainingProperty[],
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[],
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[],
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[],
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[],
  "-ms-scroll-rails"?: MsScrollRailsProperty | MsScrollRailsProperty[],
  "-ms-scroll-snap-points-x"?: GlobalsString | GlobalsString[],
  "-ms-scroll-snap-points-y"?: GlobalsString | GlobalsString[],
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[],
  "-ms-scroll-translation"?: MsScrollTranslationProperty | MsScrollTranslationProperty[],
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[],
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[],
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[],
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[],
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[],
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[],
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[],
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[],
  "-ms-text-autospace"?: MsTextAutospaceProperty | MsTextAutospaceProperty[],
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[],
  "-ms-text-overflow"?: TextOverflowProperty | TextOverflowProperty[],
  "-ms-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  "-ms-touch-action"?: TouchActionProperty | TouchActionProperty[],
  "-ms-touch-select"?: MsTouchSelectProperty | MsTouchSelectProperty[],
  "-ms-transform"?: TransformProperty | TransformProperty[],
  "-ms-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  "-ms-user-select"?: MsUserSelectProperty | MsUserSelectProperty[],
  "-ms-word-break"?: WordBreakProperty | WordBreakProperty[],
  "-ms-wrap-flow"?: MsWrapFlowProperty | MsWrapFlowProperty[],
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[],
  "-ms-wrap-through"?: MsWrapThroughProperty | MsWrapThroughProperty[],
  "-ms-writing-mode"?: WritingModeProperty | WritingModeProperty[],
  "-o-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  "-o-object-fit"?: ObjectFitProperty | ObjectFitProperty[],
  "-o-object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
  "-o-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
  "-o-text-overflow"?: TextOverflowProperty | TextOverflowProperty[],
  "-o-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  "-webkit-align-content"?: AlignContentProperty | AlignContentProperty[],
  "-webkit-align-items"?: AlignItemsProperty | AlignItemsProperty[],
  "-webkit-align-self"?: AlignSelfProperty | AlignSelfProperty[],
  "-webkit-animation-delay"?: GlobalsString | GlobalsString[],
  "-webkit-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
  "-webkit-animation-duration"?: GlobalsString | GlobalsString[],
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  "-webkit-animation-name"?: AnimationNameProperty | AnimationNameProperty[],
  "-webkit-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  "-webkit-appearance"?: AppearanceProperty | AppearanceProperty[],
  "-webkit-backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[],
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
  "-webkit-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[],
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[],
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[],
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  "-webkit-border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[],
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
  "-webkit-box-shadow"?: BoxShadowProperty | BoxShadowProperty[],
  "-webkit-box-sizing"?: BoxSizingProperty | BoxSizingProperty[],
  "-webkit-clip-path"?: ClipPathProperty | ClipPathProperty[],
  "-webkit-column-count"?: ColumnCountProperty | ColumnCountProperty[],
  "-webkit-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
  "-webkit-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[],
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[],
  "-webkit-column-span"?: ColumnSpanProperty | ColumnSpanProperty[],
  "-webkit-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
  "-webkit-filter"?: FilterProperty | FilterProperty[],
  "-webkit-flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[],
  "-webkit-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[],
  "-webkit-flex-grow"?: GlobalsNumber | GlobalsNumber[],
  "-webkit-flex-shrink"?: GlobalsNumber | GlobalsNumber[],
  "-webkit-flex-wrap"?: FlexWrapProperty | FlexWrapProperty[],
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
  "-webkit-font-kerning"?: FontKerningProperty | FontKerningProperty[],
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
  "-webkit-hyphens"?: HyphensProperty | HyphensProperty[],
  "-webkit-justify-content"?: JustifyContentProperty | JustifyContentProperty[],
  "-webkit-line-break"?: LineBreakProperty | LineBreakProperty[],
  "-webkit-margin-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[],
  "-webkit-margin-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[],
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
  "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
  "-webkit-mask-image"?: WebkitMaskImageProperty | WebkitMaskImageProperty[],
  "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[],
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[],
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[],
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[],
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[],
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[],
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[],
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[],
  "-webkit-order"?: GlobalsNumber | GlobalsNumber[],
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[],
  "-webkit-padding-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[],
  "-webkit-padding-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[],
  "-webkit-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[],
  "-webkit-text-combine"?: TextCombineUprightProperty | TextCombineUprightProperty[],
  "-webkit-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[],
  "-webkit-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[],
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
  "-webkit-text-emphasis-position"?: GlobalsString | GlobalsString[],
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[],
  "-webkit-text-orientation"?: TextOrientationProperty | TextOrientationProperty[],
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  "-webkit-transform"?: TransformProperty | TransformProperty[],
  "-webkit-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
  "-webkit-transform-style"?: TransformStyleProperty | TransformStyleProperty[],
  "-webkit-transition-delay"?: GlobalsString | GlobalsString[],
  "-webkit-transition-duration"?: GlobalsString | GlobalsString[],
  "-webkit-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  "-webkit-user-modify"?: WebkitUserModifyProperty | WebkitUserModifyProperty[],
  "-webkit-user-select"?: UserSelectProperty | UserSelectProperty[],
  "-webkit-writing-mode"?: WritingModeProperty | WritingModeProperty[],
};

declare export type VendorShorthandPropertiesHyphenFallback<TLength = string | 0> = {
  "-moz-animation"?: AnimationProperty | AnimationProperty[],
  "-moz-border-image"?: BorderImageProperty | BorderImageProperty[],
  "-moz-column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  "-moz-columns"?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  "-moz-outline-radius"?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[],
  "-moz-transition"?: TransitionProperty | TransitionProperty[],
  "-ms-content-zoom-limit"?: GlobalsString | GlobalsString[],
  "-ms-content-zoom-snap"?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[],
  "-ms-flex"?: FlexProperty<TLength> | FlexProperty<TLength>[],
  "-ms-scroll-limit"?: GlobalsString | GlobalsString[],
  "-ms-scroll-snap-x"?: GlobalsString | GlobalsString[],
  "-ms-scroll-snap-y"?: GlobalsString | GlobalsString[],
  "-o-border-image"?: BorderImageProperty | BorderImageProperty[],
  "-webkit-animation"?: AnimationProperty | AnimationProperty[],
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[],
  "-webkit-border-image"?: BorderImageProperty | BorderImageProperty[],
  "-webkit-border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  "-webkit-column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[],
  "-webkit-columns"?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[],
  "-webkit-flex"?: FlexProperty<TLength> | FlexProperty<TLength>[],
  "-webkit-flex-flow"?: FlexFlowProperty | FlexFlowProperty[],
  "-webkit-line-clamp"?: WebkitLineClampProperty | WebkitLineClampProperty[],
  "-webkit-mask"?: WebkitMaskProperty | WebkitMaskProperty[],
  "-webkit-text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[],
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
  "-webkit-transition"?: TransitionProperty | TransitionProperty[],
};

declare export type VendorPropertiesHyphenFallback<TLength = string | 0> = VendorLonghandPropertiesHyphenFallback<TLength> & VendorShorthandPropertiesHyphenFallback<TLength>;

declare export type ObsoletePropertiesHyphenFallback<TLength = string | 0> = {
  azimuth?: AzimuthProperty | AzimuthProperty[],
  "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
  "box-flex"?: GlobalsNumber | GlobalsNumber[],
  "box-orient"?: BoxOrientProperty | BoxOrientProperty[],
  "box-pack"?: BoxPackProperty | BoxPackProperty[],
  clip?: ClipProperty | ClipProperty[],
  "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[],
  "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
  "grid-gap"?: GridGapProperty<TLength> | GridGapProperty<TLength>[],
  "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
  "ime-mode"?: ImeModeProperty | ImeModeProperty[],
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[],
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[],
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[],
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[],
  "text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[],
  "-khtml-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
  "-khtml-box-flex"?: GlobalsNumber | GlobalsNumber[],
  "-khtml-box-orient"?: BoxOrientProperty | BoxOrientProperty[],
  "-khtml-box-pack"?: BoxPackProperty | BoxPackProperty[],
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
  "-moz-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
  "-moz-border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
  "-moz-border-radius-bottomleft"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
  "-moz-border-radius-bottomright"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
  "-moz-border-radius-topleft"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
  "-moz-border-radius-topright"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
  "-moz-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
  "-moz-box-flex"?: GlobalsNumber | GlobalsNumber[],
  "-moz-box-orient"?: BoxOrientProperty | BoxOrientProperty[],
  "-moz-box-pack"?: BoxPackProperty | BoxPackProperty[],
  "-moz-box-shadow"?: BoxShadowProperty | BoxShadowProperty[],
  "-moz-opacity"?: GlobalsNumber | GlobalsNumber[],
  "-moz-outline"?: OutlineProperty<TLength> | OutlineProperty<TLength>[],
  "-moz-outline-color"?: OutlineColorProperty | OutlineColorProperty[],
  "-moz-outline-style"?: OutlineStyleProperty | OutlineStyleProperty[],
  "-moz-outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
  "-moz-resize"?: ResizeProperty | ResizeProperty[],
  "-moz-text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[],
  "-moz-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[],
  "-moz-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[],
  "-moz-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
  "-ms-ime-mode"?: ImeModeProperty | ImeModeProperty[],
  "-o-animation"?: AnimationProperty | AnimationProperty[],
  "-o-animation-delay"?: GlobalsString | GlobalsString[],
  "-o-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
  "-o-animation-duration"?: GlobalsString | GlobalsString[],
  "-o-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
  "-o-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
  "-o-animation-name"?: AnimationNameProperty | AnimationNameProperty[],
  "-o-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
  "-o-transform"?: TransformProperty | TransformProperty[],
  "-o-transition"?: TransitionProperty | TransitionProperty[],
  "-o-transition-delay"?: GlobalsString | GlobalsString[],
  "-o-transition-duration"?: GlobalsString | GlobalsString[],
  "-o-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
  "-webkit-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
  "-webkit-box-flex"?: GlobalsNumber | GlobalsNumber[],
  "-webkit-box-orient"?: BoxOrientProperty | BoxOrientProperty[],
  "-webkit-box-pack"?: BoxPackProperty | BoxPackProperty[],
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
  "-webkit-scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
};

declare export type SvgPropertiesHyphenFallback<TLength = string | 0> = {
  "alignment-baseline"?: AlignmentBaselineProperty | AlignmentBaselineProperty[],
  "baseline-shift"?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[],
  clip?: ClipProperty | ClipProperty[],
  "clip-path"?: ClipPathProperty | ClipPathProperty[],
  "clip-rule"?: ClipRuleProperty | ClipRuleProperty[],
  color?: ColorProperty | ColorProperty[],
  "color-interpolation"?: ColorInterpolationProperty | ColorInterpolationProperty[],
  "color-rendering"?: ColorRenderingProperty | ColorRenderingProperty[],
  cursor?: CursorProperty | CursorProperty[],
  direction?: DirectionProperty | DirectionProperty[],
  display?: DisplayProperty | DisplayProperty[],
  "dominant-baseline"?: DominantBaselineProperty | DominantBaselineProperty[],
  fill?: FillProperty | FillProperty[],
  "fill-opacity"?: GlobalsNumber | GlobalsNumber[],
  "fill-rule"?: FillRuleProperty | FillRuleProperty[],
  filter?: FilterProperty | FilterProperty[],
  "flood-color"?: FloodColorProperty | FloodColorProperty[],
  "flood-opacity"?: GlobalsNumber | GlobalsNumber[],
  font?: FontProperty | FontProperty[],
  "font-family"?: FontFamilyProperty | FontFamilyProperty[],
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
  "font-stretch"?: FontStretchProperty | FontStretchProperty[],
  "font-style"?: FontStyleProperty | FontStyleProperty[],
  "font-variant"?: FontVariantProperty | FontVariantProperty[],
  "font-weight"?: FontWeightProperty | FontWeightProperty[],
  "glyph-orientation-vertical"?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[],
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[],
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
  "lighting-color"?: LightingColorProperty | LightingColorProperty[],
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
  marker?: MarkerProperty | MarkerProperty[],
  "marker-end"?: MarkerEndProperty | MarkerEndProperty[],
  "marker-mid"?: MarkerMidProperty | MarkerMidProperty[],
  "marker-start"?: MarkerStartProperty | MarkerStartProperty[],
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
  opacity?: GlobalsNumber | GlobalsNumber[],
  overflow?: OverflowProperty | OverflowProperty[],
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[],
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[],
  "shape-rendering"?: ShapeRenderingProperty | ShapeRenderingProperty[],
  "stop-color"?: StopColorProperty | StopColorProperty[],
  "stop-opacity"?: GlobalsNumber | GlobalsNumber[],
  stroke?: StrokeProperty | StrokeProperty[],
  "stroke-dasharray"?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[],
  "stroke-dashoffset"?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[],
  "stroke-linecap"?: StrokeLinecapProperty | StrokeLinecapProperty[],
  "stroke-linejoin"?: StrokeLinejoinProperty | StrokeLinejoinProperty[],
  "stroke-miterlimit"?: GlobalsNumber | GlobalsNumber[],
  "stroke-opacity"?: GlobalsNumber | GlobalsNumber[],
  "stroke-width"?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[],
  "text-anchor"?: TextAnchorProperty | TextAnchorProperty[],
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[],
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[],
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[],
  "vector-effect"?: VectorEffectProperty | VectorEffectProperty[],
  visibility?: VisibilityProperty | VisibilityProperty[],
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[],
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
  "writing-mode"?: WritingModeProperty | WritingModeProperty[],
};

declare export type PropertiesHyphenFallback<TLength = string | 0> = StandardPropertiesHyphenFallback<TLength> &
  VendorPropertiesHyphenFallback<TLength> &
  ObsoletePropertiesHyphenFallback<TLength> &
  SvgPropertiesHyphenFallback<TLength>;

declare export type CounterStyle = {
  additiveSymbols?: string,
  fallback?: string,
  negative?: string,
  pad?: string,
  prefix?: string,
  range?: CounterStyleRangeProperty,
  speakAs?: CounterStyleSpeakAsProperty,
  suffix?: string,
  symbols?: string,
  system?: CounterStyleSystemProperty,
};

declare export type CounterStyleHyphen = {
  "additive-symbols"?: string,
  fallback?: string,
  negative?: string,
  pad?: string,
  prefix?: string,
  range?: CounterStyleRangeProperty,
  "speak-as"?: CounterStyleSpeakAsProperty,
  suffix?: string,
  symbols?: string,
  system?: CounterStyleSystemProperty,
};

declare export type CounterStyleFallback = {
  additiveSymbols?: string | string[],
  fallback?: string | string[],
  negative?: string | string[],
  pad?: string | string[],
  prefix?: string | string[],
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[],
  speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[],
  suffix?: string | string[],
  symbols?: string | string[],
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[],
};

declare export type CounterStyleHyphenFallback = {
  "additive-symbols"?: string | string[],
  fallback?: string | string[],
  negative?: string | string[],
  pad?: string | string[],
  prefix?: string | string[],
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[],
  "speak-as"?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[],
  suffix?: string | string[],
  symbols?: string | string[],
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[],
};

declare export type FontFace = {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty,
  fontDisplay?: FontFaceFontDisplayProperty,
  fontFamily?: string,
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty,
  fontStretch?: FontFaceFontStretchProperty,
  fontStyle?: FontFaceFontStyleProperty,
  fontVariant?: FontFaceFontVariantProperty,
  fontVariationSettings?: FontFaceFontVariationSettingsProperty,
  fontWeight?: FontFaceFontWeightProperty,
  src?: string,
  unicodeRange?: string,
};

declare export type FontFaceHyphen = {
  "-moz-font-feature-settings"?: FontFaceFontFeatureSettingsProperty,
  "font-display"?: FontFaceFontDisplayProperty,
  "font-family"?: string,
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty,
  "font-stretch"?: FontFaceFontStretchProperty,
  "font-style"?: FontFaceFontStyleProperty,
  "font-variant"?: FontFaceFontVariantProperty,
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty,
  "font-weight"?: FontFaceFontWeightProperty,
  src?: string,
  "unicode-range"?: string,
};

declare export type FontFaceFallback = {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
  fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[],
  fontFamily?: string | string[],
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
  fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[],
  fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[],
  fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[],
  fontVariationSettings?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[],
  fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[],
  src?: string | string[],
  unicodeRange?: string | string[],
};

declare export type FontFaceHyphenFallback = {
  "-moz-font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
  "font-display"?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[],
  "font-family"?: string | string[],
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
  "font-stretch"?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[],
  "font-style"?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[],
  "font-variant"?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[],
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[],
  "font-weight"?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[],
  src?: string | string[],
  "unicode-range"?: string | string[],
};

declare export type Page<TLength = string | 0> = {
  bleed?: PageBleedProperty<TLength>,
  marks?: PageMarksProperty,
};

declare export type PageHyphen<TLength = string | 0> = {
  bleed?: PageBleedProperty<TLength>,
  marks?: PageMarksProperty,
};

declare export type PageFallback<TLength = string | 0> = {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[],
  marks?: PageMarksProperty | PageMarksProperty[],
};

declare export type PageHyphenFallback<TLength = string | 0> = {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[],
  marks?: PageMarksProperty | PageMarksProperty[],
};

declare export type Viewport<TLength = string | 0> = {
  msHeight?: ViewportHeightProperty<TLength>,
  msMaxHeight?: ViewportMaxHeightProperty<TLength>,
  msMaxWidth?: ViewportMaxWidthProperty<TLength>,
  msMinHeight?: ViewportMinHeightProperty<TLength>,
  msMinWidth?: ViewportMinWidthProperty<TLength>,
  msOrientation?: ViewportOrientationProperty,
  msWidth?: ViewportWidthProperty<TLength>,
  msZoom?: ViewportZoomProperty,
  OOrientation?: ViewportOrientationProperty,
  height?: ViewportHeightProperty<TLength>,
  maxHeight?: ViewportMaxHeightProperty<TLength>,
  maxWidth?: ViewportMaxWidthProperty<TLength>,
  maxZoom?: ViewportMaxZoomProperty,
  minHeight?: ViewportMinHeightProperty<TLength>,
  minWidth?: ViewportMinWidthProperty<TLength>,
  minZoom?: ViewportMinZoomProperty,
  orientation?: ViewportOrientationProperty,
  userZoom?: ViewportUserZoomProperty,
  width?: ViewportWidthProperty<TLength>,
  zoom?: ViewportZoomProperty,
};

declare export type ViewportHyphen<TLength = string | 0> = {
  "-ms-height"?: ViewportHeightProperty<TLength>,
  "-ms-max-height"?: ViewportMaxHeightProperty<TLength>,
  "-ms-max-width"?: ViewportMaxWidthProperty<TLength>,
  "-ms-min-height"?: ViewportMinHeightProperty<TLength>,
  "-ms-min-width"?: ViewportMinWidthProperty<TLength>,
  "-ms-orientation"?: ViewportOrientationProperty,
  "-ms-width"?: ViewportWidthProperty<TLength>,
  "-ms-zoom"?: ViewportZoomProperty,
  "-o-orientation"?: ViewportOrientationProperty,
  height?: ViewportHeightProperty<TLength>,
  "max-height"?: ViewportMaxHeightProperty<TLength>,
  "max-width"?: ViewportMaxWidthProperty<TLength>,
  "max-zoom"?: ViewportMaxZoomProperty,
  "min-height"?: ViewportMinHeightProperty<TLength>,
  "min-width"?: ViewportMinWidthProperty<TLength>,
  "min-zoom"?: ViewportMinZoomProperty,
  orientation?: ViewportOrientationProperty,
  "user-zoom"?: ViewportUserZoomProperty,
  width?: ViewportWidthProperty<TLength>,
  zoom?: ViewportZoomProperty,
};

declare export type ViewportFallback<TLength = string | 0> = {
  msHeight?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
  msMaxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
  msMaxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
  msMinHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
  msMinWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
  msOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
  msWidth?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
  msZoom?: ViewportZoomProperty | ViewportZoomProperty[],
  OOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
  maxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
  maxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
  maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[],
  minHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
  minWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
  minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[],
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
  userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[],
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
  zoom?: ViewportZoomProperty | ViewportZoomProperty[],
};

declare export type ViewportHyphenFallback<TLength = string | 0> = {
  "-ms-height"?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
  "-ms-max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
  "-ms-max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
  "-ms-min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
  "-ms-min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
  "-ms-orientation"?: ViewportOrientationProperty | ViewportOrientationProperty[],
  "-ms-width"?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
  "-ms-zoom"?: ViewportZoomProperty | ViewportZoomProperty[],
  "-o-orientation"?: ViewportOrientationProperty | ViewportOrientationProperty[],
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
  "max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
  "max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
  "max-zoom"?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[],
  "min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
  "min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
  "min-zoom"?: ViewportMinZoomProperty | ViewportMinZoomProperty[],
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
  "user-zoom"?: ViewportUserZoomProperty | ViewportUserZoomProperty[],
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
  zoom?: ViewportZoomProperty | ViewportZoomProperty[],
};

declare export type AtRules =
  | "@charset"
  | "@counter-style"
  | "@document"
  | "@font-face"
  | "@font-feature-values"
  | "@import"
  | "@keyframes"
  | "@media"
  | "@namespace"
  | "@page"
  | "@supports"
  | "@viewport";

declare export type AdvancedPseudos =
  | ":-moz-any"
  | ":-moz-dir"
  | ":-webkit-any"
  | "::cue"
  | ":dir"
  | ":lang"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type";

declare export type SimplePseudos =
  | ":-moz-any-link"
  | ":-moz-full-screen"
  | ":-moz-placeholder"
  | ":-moz-read-only"
  | ":-moz-read-write"
  | ":-ms-fullscreen"
  | ":-webkit-any-link"
  | ":-webkit-full-screen"
  | "::-moz-placeholder"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-moz-selection"
  | "::-ms-backdrop"
  | "::-ms-browse"
  | "::-ms-check"
  | "::-ms-clear"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-placeholder"
  | "::-ms-reveal"
  | "::-ms-thumb"
  | "::-ms-ticks-after"
  | "::-ms-ticks-before"
  | "::-ms-tooltip"
  | "::-ms-track"
  | "::-ms-value"
  | "::-webkit-backdrop"
  | "::-webkit-placeholder"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::placeholder"
  | "::selection"
  | "::spelling-error"
  | ":active"
  | ":after"
  | ":any-link"
  | ":before"
  | ":checked"
  | ":default"
  | ":defined"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-letter"
  | ":first-line"
  | ":first-of-type"
  | ":focus"
  | ":focus-visible"
  | ":focus-within"
  | ":fullscreen"
  | ":host"
  | ":host-context"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited";

declare export type Pseudos = AdvancedPseudos | SimplePseudos;

declare type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";

declare type GlobalsString = Globals | string;

declare type GlobalsNumber = Globals | number;

declare type AlignContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

declare type AlignItemsProperty = Globals | SelfPosition | "baseline" | "normal" | "stretch" | string;

declare type AlignSelfProperty = Globals | SelfPosition | "auto" | "baseline" | "normal" | "stretch" | string;

declare type AnimationProperty = Globals | SingleAnimation | string;

declare type AnimationDirectionProperty = Globals | SingleAnimationDirection | string;

declare type AnimationFillModeProperty = Globals | SingleAnimationFillMode | string;

declare type AnimationIterationCountProperty = Globals | "infinite" | string | number;

declare type AnimationNameProperty = Globals | "none" | string;

declare type AnimationPlayStateProperty = Globals | "paused" | "running" | string;

declare type AnimationTimingFunctionProperty = Globals | SingleTimingFunction | string;

declare type AppearanceProperty = Globals | "none";

declare type AzimuthProperty =
  | Globals
  | "behind"
  | "center"
  | "center-left"
  | "center-right"
  | "far-left"
  | "far-right"
  | "left"
  | "left-side"
  | "leftwards"
  | "right"
  | "right-side"
  | "rightwards"
  | string;

declare type BackdropFilterProperty = Globals | "none" | string;

declare type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

declare type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;

declare type BackgroundAttachmentProperty = Globals | Attachment | string;

declare type BackgroundBlendModeProperty = Globals | BlendMode | string;

declare type BackgroundClipProperty = Globals | Box | string;

declare type BackgroundColorProperty = Globals | Color;

declare type BackgroundImageProperty = Globals | "none" | string;

declare type BackgroundOriginProperty = Globals | Box | string;

declare type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength> | string;

declare type BackgroundPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | string;

declare type BackgroundPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

declare type BackgroundRepeatProperty = Globals | RepeatStyle | string;

declare type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength> | string;

declare type BlockOverflowProperty = Globals | "clip" | "ellipsis" | string;

declare type BlockSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

declare type BorderProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderBlockEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderBlockEndColorProperty = Globals | Color;

declare type BorderBlockEndStyleProperty = Globals | BrStyle | string;

declare type BorderBlockEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type BorderBlockStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderBlockStartColorProperty = Globals | Color;

declare type BorderBlockStartStyleProperty = Globals | BrStyle | string;

declare type BorderBlockStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type BorderBottomProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderBottomColorProperty = Globals | Color;

declare type BorderBottomLeftRadiusProperty<TLength> = Globals | TLength | string;

declare type BorderBottomRightRadiusProperty<TLength> = Globals | TLength | string;

declare type BorderBottomStyleProperty = Globals | BrStyle;

declare type BorderBottomWidthProperty<TLength> = Globals | BrWidth<TLength>;

declare type BorderCollapseProperty = Globals | "collapse" | "separate";

declare type BorderColorProperty = Globals | Color | string;

declare type BorderImageProperty = Globals | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

declare type BorderImageOutsetProperty<TLength> = Globals | TLength | string | number;

declare type BorderImageRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

declare type BorderImageSliceProperty = Globals | string | number;

declare type BorderImageSourceProperty = Globals | "none" | string;

declare type BorderImageWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

declare type BorderInlineEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderInlineEndColorProperty = Globals | Color;

declare type BorderInlineEndStyleProperty = Globals | BrStyle | string;

declare type BorderInlineEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type BorderInlineStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderInlineStartColorProperty = Globals | Color;

declare type BorderInlineStartStyleProperty = Globals | BrStyle | string;

declare type BorderInlineStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type BorderLeftProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderLeftColorProperty = Globals | Color;

declare type BorderLeftStyleProperty = Globals | BrStyle;

declare type BorderLeftWidthProperty<TLength> = Globals | BrWidth<TLength>;

declare type BorderRadiusProperty<TLength> = Globals | TLength | string;

declare type BorderRightProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderRightColorProperty = Globals | Color;

declare type BorderRightStyleProperty = Globals | BrStyle;

declare type BorderRightWidthProperty<TLength> = Globals | BrWidth<TLength>;

declare type BorderSpacingProperty<TLength> = Globals | TLength | string;

declare type BorderStyleProperty = Globals | BrStyle | string;

declare type BorderTopProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type BorderTopColorProperty = Globals | Color;

declare type BorderTopLeftRadiusProperty<TLength> = Globals | TLength | string;

declare type BorderTopRightRadiusProperty<TLength> = Globals | TLength | string;

declare type BorderTopStyleProperty = Globals | BrStyle;

declare type BorderTopWidthProperty<TLength> = Globals | BrWidth<TLength>;

declare type BorderWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type BottomProperty<TLength> = Globals | TLength | "auto" | string;

declare type BoxAlignProperty = Globals | "baseline" | "center" | "end" | "start" | "stretch";

declare type BoxDecorationBreakProperty = Globals | "clone" | "slice";

declare type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

declare type BoxLinesProperty = Globals | "multiple" | "single";

declare type BoxOrientProperty = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

declare type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

declare type BoxShadowProperty = Globals | "none" | string;

declare type BoxSizingProperty = Globals | "border-box" | "content-box";

declare type BreakAfterProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

declare type BreakBeforeProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

declare type BreakInsideProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

declare type CaptionSideProperty = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

declare type CaretColorProperty = Globals | Color | "auto";

declare type ClearProperty = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

declare type ClipProperty = Globals | "auto" | string;

declare type ClipPathProperty = Globals | GeometryBox | "none" | string;

declare type ColorProperty = Globals | Color;

declare type ColorAdjustProperty = Globals | "economy" | "exact";

declare type ColumnCountProperty = Globals | "auto" | number;

declare type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

declare type ColumnGapProperty<TLength> = Globals | TLength | "normal" | string;

declare type ColumnRuleProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type ColumnRuleColorProperty = Globals | Color;

declare type ColumnRuleStyleProperty = Globals | BrStyle | string;

declare type ColumnRuleWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type ColumnSpanProperty = Globals | "all" | "none";

declare type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

declare type ColumnsProperty<TLength> = Globals | TLength | "auto" | string | number;

declare type ContainProperty = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

declare type ContentProperty = Globals | ContentList | "none" | "normal" | string;

declare type CounterIncrementProperty = Globals | "none" | string;

declare type CounterResetProperty = Globals | "none" | string;

declare type CursorProperty =
  | Globals
  | "-moz-grab"
  | "-webkit-grab"
  | "alias"
  | "all-scroll"
  | "auto"
  | "cell"
  | "col-resize"
  | "context-menu"
  | "copy"
  | "crosshair"
  | "default"
  | "e-resize"
  | "ew-resize"
  | "grab"
  | "grabbing"
  | "help"
  | "move"
  | "n-resize"
  | "ne-resize"
  | "nesw-resize"
  | "no-drop"
  | "none"
  | "not-allowed"
  | "ns-resize"
  | "nw-resize"
  | "nwse-resize"
  | "pointer"
  | "progress"
  | "row-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "text"
  | "vertical-text"
  | "w-resize"
  | "wait"
  | "zoom-in"
  | "zoom-out"
  | string;

declare type DirectionProperty = Globals | "ltr" | "rtl";

declare type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayInternal | DisplayLegacy | "contents" | "list-item" | "none" | string;

declare type EmptyCellsProperty = Globals | "hide" | "show";

declare type FilterProperty = Globals | "none" | string;

declare type FlexProperty<TLength> = Globals | TLength | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | "none" | string | number;

declare type FlexBasisProperty<TLength> = Globals | TLength | "-webkit-auto" | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | string;

declare type FlexDirectionProperty = Globals | "column" | "column-reverse" | "row" | "row-reverse";

declare type FlexFlowProperty = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | string;

declare type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

declare type FloatProperty = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

declare type FontProperty = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

declare type FontFamilyProperty = Globals | GenericFamily | string;

declare type FontFeatureSettingsProperty = Globals | "normal" | string;

declare type FontKerningProperty = Globals | "auto" | "none" | "normal";

declare type FontLanguageOverrideProperty = Globals | "normal" | string;

declare type FontSizeProperty<TLength> = Globals | AbsoluteSize | TLength | "larger" | "smaller" | string;

declare type FontSizeAdjustProperty = Globals | "none" | number;

declare type FontStretchProperty =
  | Globals
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

declare type FontStyleProperty = Globals | "italic" | "normal" | "oblique";

declare type FontSynthesisProperty = Globals | "none" | "style" | "weight" | string;

declare type FontVariantProperty =
  | Globals
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

declare type FontVariantAlternatesProperty = Globals | "historical-forms" | "normal" | string;

declare type FontVariantCapsProperty = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

declare type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | string;

declare type FontVariantLigaturesProperty =
  | Globals
  | "common-ligatures"
  | "contextual"
  | "discretionary-ligatures"
  | "historical-ligatures"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | string;

declare type FontVariantNumericProperty =
  | Globals
  | "diagonal-fractions"
  | "lining-nums"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "proportional-nums"
  | "slashed-zero"
  | "stacked-fractions"
  | "tabular-nums"
  | string;

declare type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

declare type FontVariationSettingsProperty = Globals | "normal" | string;

declare type FontWeightProperty = Globals | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type GapProperty<TLength> = Globals | TLength | "normal" | string;

declare type GridProperty = Globals | "none" | string;

declare type GridAreaProperty = Globals | GridLine | string;

declare type GridAutoColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

declare type GridAutoFlowProperty = Globals | "column" | "dense" | "row" | string;

declare type GridAutoRowsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

declare type GridColumnProperty = Globals | GridLine | string;

declare type GridColumnEndProperty = Globals | GridLine;

declare type GridColumnGapProperty<TLength> = Globals | TLength | string;

declare type GridColumnStartProperty = Globals | GridLine;

declare type GridGapProperty<TLength> = Globals | TLength | string;

declare type GridRowProperty = Globals | GridLine | string;

declare type GridRowEndProperty = Globals | GridLine;

declare type GridRowGapProperty<TLength> = Globals | TLength | string;

declare type GridRowStartProperty = Globals | GridLine;

declare type GridTemplateProperty = Globals | "none" | string;

declare type GridTemplateAreasProperty = Globals | "none" | string;

declare type GridTemplateColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

declare type GridTemplateRowsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

declare type HangingPunctuationProperty = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | string;

declare type HeightProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

declare type HyphensProperty = Globals | "auto" | "manual" | "none";

declare type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

declare type ImageRenderingProperty = Globals | "-moz-crisp-edges" | "-o-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";

declare type ImageResolutionProperty = Globals | "from-image" | string;

declare type ImeModeProperty = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

declare type InitialLetterProperty = Globals | "normal" | string | number;

declare type InitialLetterAlignProperty = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

declare type InlineSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

declare type IsolationProperty = Globals | "auto" | "isolate";

declare type JustifyContentProperty = Globals | ContentDistribution | ContentPosition | "left" | "normal" | "right" | string;

declare type JustifyItemsProperty = Globals | SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | string;

declare type JustifySelfProperty = Globals | SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | string;

declare type LeftProperty<TLength> = Globals | TLength | "auto" | string;

declare type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

declare type LineBreakProperty = Globals | "auto" | "loose" | "normal" | "strict";

declare type LineClampProperty = Globals | "none" | number;

declare type LineHeightProperty<TLength> = Globals | TLength | "normal" | string | number;

declare type LineHeightStepProperty<TLength> = Globals | TLength | "none";

declare type ListStyleProperty = Globals | "inside" | "none" | "outside" | string;

declare type ListStyleImageProperty = Globals | "none" | string;

declare type ListStylePositionProperty = Globals | "inside" | "outside";

declare type ListStyleTypeProperty = Globals | "none" | string;

declare type MarginProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

declare type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

declare type MaskProperty<TLength> = Globals | MaskLayer<TLength> | string;

declare type MaskBorderProperty = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

declare type MaskBorderModeProperty = Globals | "alpha" | "luminance";

declare type MaskBorderOutsetProperty<TLength> = Globals | TLength | string | number;

declare type MaskBorderRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

declare type MaskBorderSliceProperty = Globals | string | number;

declare type MaskBorderSourceProperty = Globals | "none" | string;

declare type MaskBorderWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

declare type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

declare type MaskCompositeProperty = Globals | CompositingOperator | string;

declare type MaskImageProperty = Globals | "none" | string;

declare type MaskModeProperty = Globals | MaskingMode | string;

declare type MaskOriginProperty = Globals | GeometryBox | string;

declare type MaskPositionProperty<TLength> = Globals | Position<TLength> | string;

declare type MaskRepeatProperty = Globals | RepeatStyle | string;

declare type MaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;

declare type MaskTypeProperty = Globals | "alpha" | "luminance";

declare type MaxBlockSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

declare type MaxHeightProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

declare type MaxInlineSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

declare type MaxLinesProperty = Globals | "none" | number;

declare type MaxWidthProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

declare type MinBlockSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

declare type MinHeightProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

declare type MinInlineSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

declare type MinWidthProperty<TLength> = Globals | TLength | "-webkit-fill-available" | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

declare type MixBlendModeProperty = Globals | BlendMode;

declare type OffsetProperty<TLength> = Globals | Position<TLength> | GeometryBox | "auto" | "none" | string;

declare type OffsetDistanceProperty<TLength> = Globals | TLength | string;

declare type OffsetPathProperty = Globals | GeometryBox | "none" | string;

declare type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

declare type ObjectFitProperty = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

declare type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

declare type OffsetAnchorProperty<TLength> = Globals | Position<TLength> | "auto";

declare type OffsetBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

declare type OffsetBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

declare type OffsetInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

declare type OffsetInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

declare type OffsetPositionProperty<TLength> = Globals | Position<TLength> | "auto";

declare type OutlineProperty<TLength> = Globals | Color | BrStyle | BrWidth<TLength> | "auto" | "invert" | string;

declare type OutlineColorProperty = Globals | Color | "invert";

declare type OutlineOffsetProperty<TLength> = Globals | TLength;

declare type OutlineStyleProperty = Globals | BrStyle | "auto";

declare type OutlineWidthProperty<TLength> = Globals | BrWidth<TLength>;

declare type OverflowProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

declare type OverflowAnchorProperty = Globals | "auto" | "none";

declare type OverflowBlockProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

declare type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

declare type OverflowInlineProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

declare type OverflowWrapProperty = Globals | "break-word" | "normal";

declare type OverflowXProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

declare type OverflowYProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

declare type OverscrollBehaviorProperty = Globals | "auto" | "contain" | "none" | string;

declare type OverscrollBehaviorXProperty = Globals | "auto" | "contain" | "none";

declare type OverscrollBehaviorYProperty = Globals | "auto" | "contain" | "none";

declare type PaddingProperty<TLength> = Globals | TLength | string;

declare type PaddingBlockEndProperty<TLength> = Globals | TLength | string;

declare type PaddingBlockStartProperty<TLength> = Globals | TLength | string;

declare type PaddingBottomProperty<TLength> = Globals | TLength | string;

declare type PaddingInlineEndProperty<TLength> = Globals | TLength | string;

declare type PaddingInlineStartProperty<TLength> = Globals | TLength | string;

declare type PaddingLeftProperty<TLength> = Globals | TLength | string;

declare type PaddingRightProperty<TLength> = Globals | TLength | string;

declare type PaddingTopProperty<TLength> = Globals | TLength | string;

declare type PageBreakAfterProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

declare type PageBreakBeforeProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

declare type PageBreakInsideProperty = Globals | "auto" | "avoid";

declare type PaintOrderProperty = Globals | "fill" | "markers" | "normal" | "stroke" | string;

declare type PerspectiveProperty<TLength> = Globals | TLength | "none";

declare type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

declare type PlaceContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

declare type PointerEventsProperty = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

declare type PositionProperty = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

declare type QuotesProperty = Globals | "none" | string;

declare type ResizeProperty = Globals | "both" | "horizontal" | "none" | "vertical";

declare type RightProperty<TLength> = Globals | TLength | "auto" | string;

declare type RotateProperty = Globals | "none" | string;

declare type RowGapProperty<TLength> = Globals | TLength | "normal" | string;

declare type RubyAlignProperty = Globals | "center" | "space-around" | "space-between" | "start";

declare type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

declare type RubyPositionProperty = Globals | "inter-character" | "over" | "under";

declare type ScaleProperty = Globals | "none" | string | number;

declare type ScrollBehaviorProperty = Globals | "auto" | "smooth";

declare type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | "none" | string;

declare type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;

declare type ScrollSnapPointsXProperty = Globals | "none" | string;

declare type ScrollSnapPointsYProperty = Globals | "none" | string;

declare type ScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

declare type ScrollSnapTypeXProperty = Globals | "mandatory" | "none" | "proximity";

declare type ScrollSnapTypeYProperty = Globals | "mandatory" | "none" | "proximity";

declare type ShapeMarginProperty<TLength> = Globals | TLength | string;

declare type ShapeOutsideProperty = Globals | Box | "margin-box" | "none" | string;

declare type TabSizeProperty<TLength> = Globals | TLength | number;

declare type TableLayoutProperty = Globals | "auto" | "fixed";

declare type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

declare type TextAlignLastProperty = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

declare type TextCombineUprightProperty = Globals | "all" | "digits" | "none" | string;

declare type TextDecorationProperty = Globals | Color | "blink" | "dashed" | "dotted" | "double" | "line-through" | "none" | "overline" | "solid" | "underline" | "wavy" | string;

declare type TextDecorationColorProperty = Globals | Color;

declare type TextDecorationLineProperty = Globals | "blink" | "line-through" | "none" | "overline" | "underline" | string;

declare type TextDecorationSkipProperty = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

declare type TextDecorationSkipInkProperty = Globals | "auto" | "none";

declare type TextDecorationStyleProperty = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

declare type TextEmphasisProperty = Globals | Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

declare type TextEmphasisColorProperty = Globals | Color;

declare type TextEmphasisStyleProperty = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

declare type TextIndentProperty<TLength> = Globals | TLength | string;

declare type TextJustifyProperty = Globals | "auto" | "inter-character" | "inter-word" | "none";

declare type TextOrientationProperty = Globals | "mixed" | "sideways" | "upright";

declare type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

declare type TextRenderingProperty = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

declare type TextShadowProperty = Globals | "none" | string;

declare type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

declare type TextTransformProperty = Globals | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

declare type TextUnderlinePositionProperty = Globals | "auto" | "left" | "right" | "under" | string;

declare type TopProperty<TLength> = Globals | TLength | "auto" | string;

declare type TouchActionProperty =
  | Globals
  | "-ms-manipulation"
  | "-ms-pinch-zoom"
  | "auto"
  | "manipulation"
  | "none"
  | "pan-down"
  | "pan-left"
  | "pan-right"
  | "pan-up"
  | "pan-x"
  | "pan-y"
  | "pinch-zoom"
  | string;

declare type TransformProperty = Globals | "none" | string;

declare type TransformBoxProperty = Globals | "border-box" | "fill-box" | "view-box";

declare type TransformOriginProperty<TLength> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | string;

declare type TransformStyleProperty = Globals | "flat" | "preserve-3d";

declare type TransitionProperty = Globals | SingleTransition | string;

declare type TransitionPropertyProperty = Globals | "all" | "none" | string;

declare type TransitionTimingFunctionProperty = Globals | SingleTimingFunction | string;

declare type TranslateProperty<TLength> = Globals | TLength | "none" | string;

declare type UnicodeBidiProperty =
  | Globals
  | "-moz-isolate"
  | "-moz-isolate-override"
  | "-moz-plaintext"
  | "-webkit-isolate"
  | "bidi-override"
  | "embed"
  | "isolate"
  | "isolate-override"
  | "normal"
  | "plaintext";

declare type UserSelectProperty = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";

declare type VerticalAlignProperty<TLength> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

declare type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

declare type WhiteSpaceProperty = Globals | "-moz-pre-wrap" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

declare type WidthProperty<TLength> =
  | Globals
  | TLength
  | "-moz-available"
  | "-moz-fit-content"
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-fit-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "available"
  | "fit-content"
  | "intrinsic"
  | "max-content"
  | "min-content"
  | "min-intrinsic"
  | string;

declare type WillChangeProperty = Globals | AnimateableFeature | "auto" | string;

declare type WordBreakProperty = Globals | "break-all" | "break-word" | "keep-all" | "normal";

declare type WordSpacingProperty<TLength> = Globals | TLength | "normal" | string;

declare type WordWrapProperty = Globals | "break-word" | "normal";

declare type WritingModeProperty = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

declare type ZIndexProperty = Globals | "auto" | number;

declare type ZoomProperty = Globals | "normal" | "reset" | string | number;

declare type MozAppearanceProperty =
  | Globals
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communications-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-media-toolbox"
  | "-moz-win-mediatext"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "none"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scale-vertical"
  | "scalethumb-horizontal"
  | "scalethumb-vertical"
  | "scalethumbend"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "scrollbarbutton-up"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "tabpanel"
  | "tabpanels"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview";

declare type MozBindingProperty = Globals | "none" | string;

declare type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

declare type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

declare type MozBorderRightColorsProperty = Globals | Color | "none" | string;

declare type MozBorderTopColorsProperty = Globals | Color | "none" | string;

declare type MozContextPropertiesProperty = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

declare type MozFloatEdgeProperty = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

declare type MozImageRegionProperty = Globals | "auto" | string;

declare type MozOrientProperty = Globals | "block" | "horizontal" | "inline" | "vertical";

declare type MozOutlineRadiusProperty<TLength> = Globals | TLength | string;

declare type MozOutlineRadiusBottomleftProperty<TLength> = Globals | TLength | string;

declare type MozOutlineRadiusBottomrightProperty<TLength> = Globals | TLength | string;

declare type MozOutlineRadiusTopleftProperty<TLength> = Globals | TLength | string;

declare type MozOutlineRadiusToprightProperty<TLength> = Globals | TLength | string;

declare type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

declare type MozTextBlinkProperty = Globals | "blink" | "none";

declare type MozUserFocusProperty = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

declare type MozUserInputProperty = Globals | "auto" | "disabled" | "enabled" | "none";

declare type MozUserModifyProperty = Globals | "read-only" | "read-write" | "write-only";

declare type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

declare type MozWindowShadowProperty = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

declare type MsAcceleratorProperty = Globals | "false" | "true";

declare type MsBlockProgressionProperty = Globals | "bt" | "lr" | "rl" | "tb";

declare type MsContentZoomChainingProperty = Globals | "chained" | "none";

declare type MsContentZoomSnapProperty = Globals | "mandatory" | "none" | "proximity" | string;

declare type MsContentZoomSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

declare type MsContentZoomingProperty = Globals | "none" | "zoom";

declare type MsFlowFromProperty = Globals | "none" | string;

declare type MsFlowIntoProperty = Globals | "none" | string;

declare type MsHighContrastAdjustProperty = Globals | "auto" | "none";

declare type MsHyphenateLimitCharsProperty = Globals | "auto" | string | number;

declare type MsHyphenateLimitLinesProperty = Globals | "no-limit" | number;

declare type MsHyphenateLimitZoneProperty<TLength> = Globals | TLength | string;

declare type MsImeAlignProperty = Globals | "after" | "auto";

declare type MsOverflowStyleProperty = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

declare type MsScrollChainingProperty = Globals | "chained" | "none";

declare type MsScrollLimitXMaxProperty<TLength> = Globals | TLength | "auto";

declare type MsScrollLimitXMinProperty<TLength> = Globals | TLength;

declare type MsScrollLimitYMaxProperty<TLength> = Globals | TLength | "auto";

declare type MsScrollLimitYMinProperty<TLength> = Globals | TLength;

declare type MsScrollRailsProperty = Globals | "none" | "railed";

declare type MsScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

declare type MsScrollTranslationProperty = Globals | "none" | "vertical-to-horizontal";

declare type MsScrollbar3dlightColorProperty = Globals | Color;

declare type MsScrollbarArrowColorProperty = Globals | Color;

declare type MsScrollbarBaseColorProperty = Globals | Color;

declare type MsScrollbarDarkshadowColorProperty = Globals | Color;

declare type MsScrollbarFaceColorProperty = Globals | Color;

declare type MsScrollbarHighlightColorProperty = Globals | Color;

declare type MsScrollbarShadowColorProperty = Globals | Color;

declare type MsScrollbarTrackColorProperty = Globals | Color;

declare type MsTextAutospaceProperty = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

declare type MsTouchSelectProperty = Globals | "grippers" | "none";

declare type MsUserSelectProperty = Globals | "element" | "none" | "text";

declare type MsWrapFlowProperty = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

declare type MsWrapMarginProperty<TLength> = Globals | TLength;

declare type MsWrapThroughProperty = Globals | "none" | "wrap";

declare type WebkitBorderBeforeProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

declare type WebkitBorderBeforeColorProperty = Globals | Color;

declare type WebkitBorderBeforeStyleProperty = Globals | BrStyle | string;

declare type WebkitBorderBeforeWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

declare type WebkitBoxReflectProperty<TLength> = Globals | TLength | "above" | "below" | "left" | "right" | string;

declare type WebkitLineClampProperty = Globals | "none" | number;

declare type WebkitMaskProperty = Globals | "none" | string;

declare type WebkitMaskAttachmentProperty = Globals | Attachment | string;

declare type WebkitMaskClipProperty = Globals | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

declare type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

declare type WebkitMaskImageProperty = Globals | "none" | string;

declare type WebkitMaskOriginProperty = Globals | "border" | "content" | "padding" | string;

declare type WebkitMaskPositionProperty<TLength> = Globals | MaskPosition<TLength> | string;

declare type WebkitMaskPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | string;

declare type WebkitMaskPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | string;

declare type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

declare type WebkitMaskRepeatXProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

declare type WebkitMaskRepeatYProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

declare type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

declare type WebkitTapHighlightColorProperty = Globals | Color;

declare type WebkitTextFillColorProperty = Globals | Color;

declare type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;

declare type WebkitTextStrokeColorProperty = Globals | Color;

declare type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

declare type WebkitTouchCalloutProperty = Globals | "default" | "none";

declare type WebkitUserModifyProperty = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

declare type AlignmentBaselineProperty =
  | Globals
  | "after-edge"
  | "alphabetic"
  | "auto"
  | "baseline"
  | "before-edge"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "text-after-edge"
  | "text-before-edge";

declare type BaselineShiftProperty<TLength> = Globals | TLength | "baseline" | "sub" | "super" | string;

declare type ClipRuleProperty = Globals | "evenodd" | "nonzero";

declare type ColorInterpolationProperty = Globals | "auto" | "linearRGB" | "sRGB";

declare type ColorRenderingProperty = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

declare type DominantBaselineProperty =
  | Globals
  | "alphabetic"
  | "auto"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "no-change"
  | "reset-size"
  | "text-after-edge"
  | "text-before-edge"
  | "use-script";

declare type FillProperty = Globals | Paint;

declare type FillRuleProperty = Globals | "evenodd" | "nonzero";

declare type FloodColorProperty = Globals | Color | "currentColor";

declare type GlyphOrientationVerticalProperty = Globals | "auto" | string | number;

declare type LightingColorProperty = Globals | Color | "currentColor";

declare type MarkerProperty = Globals | "none" | string;

declare type MarkerEndProperty = Globals | "none" | string;

declare type MarkerMidProperty = Globals | "none" | string;

declare type MarkerStartProperty = Globals | "none" | string;

declare type ShapeRenderingProperty = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

declare type StopColorProperty = Globals | Color | "currentColor";

declare type StrokeProperty = Globals | Paint;

declare type StrokeDasharrayProperty<TLength> = Globals | Dasharray<TLength> | "none";

declare type StrokeDashoffsetProperty<TLength> = Globals | TLength | string;

declare type StrokeLinecapProperty = Globals | "butt" | "round" | "square";

declare type StrokeLinejoinProperty = Globals | "bevel" | "miter" | "round";

declare type StrokeWidthProperty<TLength> = Globals | TLength | string;

declare type TextAnchorProperty = Globals | "end" | "middle" | "start";

declare type VectorEffectProperty = Globals | "non-scaling-stroke" | "none";

declare type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

declare type CounterStyleSpeakAsProperty = "auto" | "bullets" | "numbers" | "spell-out" | "words" | string;

declare type CounterStyleSystemProperty = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | string;

declare type FontFaceFontFeatureSettingsProperty = "normal" | string;

declare type FontFaceFontDisplayProperty = "auto" | "block" | "fallback" | "optional" | "swap";

declare type FontFaceFontStretchProperty =
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

declare type FontFaceFontStyleProperty = "italic" | "normal" | "oblique";

declare type FontFaceFontVariantProperty =
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

declare type FontFaceFontVariationSettingsProperty = "normal";

declare type FontFaceFontWeightProperty = "bold" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type PageBleedProperty<TLength> = TLength | "auto";

declare type PageMarksProperty = "crop" | "cross" | "none" | string;

declare type ViewportHeightProperty<TLength> = ViewportLength<TLength> | string;

declare type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

declare type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

declare type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

declare type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

declare type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

declare type ViewportWidthProperty<TLength> = ViewportLength<TLength> | string;

declare type ViewportZoomProperty = "auto" | string | number;

declare type ViewportMaxZoomProperty = "auto" | string | number;

declare type ViewportMinZoomProperty = "auto" | string | number;

declare type ViewportUserZoomProperty = "fixed" | "zoom";

declare type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small";

declare type AnimateableFeature = "contents" | "scroll-position" | string;

declare type Attachment = "fixed" | "local" | "scroll";

declare type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | string;

declare type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | string;

declare type BlendMode =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "darken"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "luminosity"
  | "multiply"
  | "normal"
  | "overlay"
  | "saturation"
  | "screen"
  | "soft-light";

declare type Box = "border-box" | "content-box" | "padding-box";

declare type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

declare type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

declare type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

declare type CompositeStyle =
  | "clear"
  | "copy"
  | "destination-atop"
  | "destination-in"
  | "destination-out"
  | "destination-over"
  | "source-atop"
  | "source-in"
  | "source-out"
  | "source-over"
  | "xor";

declare type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

declare type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";

declare type ContentList = Quote | "contents" | string;

declare type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

declare type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | string;

declare type Dasharray<TLength> = TLength | string | number;

declare type DeprecatedSystemColor =
  | "ActiveBorder"
  | "ActiveCaption"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "InactiveCaptionText"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

declare type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

declare type DisplayInternal =
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

declare type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

declare type DisplayOutside = "block" | "inline" | "run-in";

declare type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

declare type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | string;

declare type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

declare type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";

declare type GridLine = "auto" | string | number;

declare type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | string;

declare type MaskPosition<TLength> = TLength | "center" | "left" | "right" | string;

declare type MaskingMode = "alpha" | "luminance" | "match-source";

declare type NamedColor =
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "transparent"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

declare type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | string;

declare type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | string;

declare type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

declare type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | string;

declare type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";

declare type SingleAnimation = SingleTimingFunction | SingleAnimationDirection | SingleAnimationFillMode | "infinite" | "none" | "paused" | "running" | string | number;

declare type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

declare type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

declare type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear" | string;

declare type SingleTransition = SingleTimingFunction | "all" | "none" | string;

declare type StepTimingFunction = "step-end" | "step-start" | string;

declare type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | string;

declare type ViewportLength<TLength> = TLength | "auto" | string;
}
