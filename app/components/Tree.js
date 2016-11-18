import React from 'react';
import _ from 'lodash';
import Options from 'components/Options';
import fontAdapt from 'components/fontAdapter';
import styleSvg from 'components/styleSvg';
var Tree = require('paths-js/tree');

function children(x) {
    if(x.collapsed) {
        return []
    }
    else {
        return x.children || []
    }
}

export default class TreeChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {finished:true};
    }
    render() {
        var noDataMsg = this.props.noDataMessage || "No data available";
        if (this.props.data === undefined) return (<span>{noDataMsg}</span>);

        var options = new Options(this.props);
        var that = this;

        var tree = Tree({
            data: this.props.data,
            children: children,
            width: options.chartWidth,
            height: options.chartHeight
        });
        var colors = styleSvg({},options);
        var curves = _.map(tree.curves,function (c,i) {
            return <path  key={"curves_" + i} d={ c.connector.path.print() } fill="none" stroke={colors.stroke} strokeOpacity={colors.strokeOpacity} />
        });

        var sec = options.animate.fillTransition || 0;
        var fillOpacityStyle = {fillOpacity:this.state.finished?1:0,transition: this.state.finished?'fill-opacity ' + sec + 's':''};

        var textStyle = fontAdapt(options.label);
        var r = options.r || 5;
        var nodes = _.map(tree.nodes,function (n,index) {
            var position = "translate(" + n.point[0] + "," + n.point[1] + ")";

            function toggle() {
                n.item.collapsed = !n.item.collapsed;
                that.forceUpdate();
            };

            if (children(n.item).length > 0) {
                var text = <text style={textStyle} x="25" y="25" textAnchor="middle">{ n.item.name }</text>;
            } else {
                var text = <text style={textStyle} x="0" y="25" textAnchor="middle">{ n.item.name }</text>;
            }

            return (
                <g key={"tree_" + index} transform={ position }>
		    <rect x="0" y="0" width="50" height="50" fill="white" style={fillOpacityStyle} {...colors} stroke="#FF2626" rx="10" ry="25" strokeWidth="10" />
                    { text }
                </g>
            )
        });

        return (
            <svg ref="vivus"  width={options.width} height={options.height}>
                <g transform={"translate(" + options.margin.left + "," + options.margin.top + ")"}>
                    { curves }
                    { nodes }
		    <text>{ this.props.pipelineName}</text>
                </g>
            </svg>
        )
    }
}
TreeChart.defaultProps =   {

    options: {
        margin: {top: 20, left: 50, right: 80, bottom: 20},
        width: 600,
        height: 600,
        fill: "#2980B9",
        stroke: "#3E90F0",
        r: 5,
        animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
        },
        label: {
            fontFamily: 'Arial',
            fontSize: 14,
            bold: true,
            fill: '#34495E'
        }
    }
}

