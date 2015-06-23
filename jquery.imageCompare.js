(function($){
    $.fn.imageCompare = function(opt){
        var settings = $.extend({
            grapWidth:"1px",
            grapColor: "white"
        }, opt );
        
        this.filter("img").each(function(){
            var self = $(this);
            var w = self.width();
            var h = self.height();
            var under = self.attr("src");
            var top = self.attr("data-cover");
            var o_off = self.offset();
            
            var c_div = $("<div class='compare'></div>");
            c_div.css({width:w + "px", height: h + "px", background:"url('" + under + "') no-repeat center center", position:'absolute', top:o_off.top, left:o_off.left, overflow:'hidden', cursor:'w-resize', backgroundSize:'100% 100%'});
            var t_div = $("<div></div>");
            t_div.css({width:"50%", height:"100%", background:"url('" + top + "') no-repeat left center", position:'absolute', borderRightWidth:settings.grapWidth, borderRightStyle:'solid', borderRightColor:settings.grapColor, backgroundSize:w + "px " + h + "px"});
            c_div.append(t_div);
            self.css({visibility:'hidden'});
            self.after(c_div);
            var off = c_div.offset();
            c_div.mousemove(function(e){
                var tw = e.pageX - (off.left|0);
                t_div.css({width:tw + "px"});
            });
        });
        
        return this;
    }
})(jQuery);
