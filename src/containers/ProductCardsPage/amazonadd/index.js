var React = require('react');
var createReactClass = require('create-react-class');

var AmazoneAdd = createReactClass({
  amazoneScript: function() {
    return '<div style={{text-aligh:"Right"}}> <script type="text/javascript">amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="geekyvids-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category ="Electronics"; amzn_assoc_default_search_key ="";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF"; </script><script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"></script> </div>'
  },
  render: function() {
    return (
      <div >
        <div className='advertisement'>
          <div dangerouslySetInnerHTML={{__html: this.amazoneScript()}}></div>
        </div>
      </div>
    );
  }
});

module.exports = AmazoneAdd;