//gnb
$(document).ready( function(){
    $('.m_menu').click(function(){
        $(this).toggleClass('on')
        $('.gnbWrap nav').toggleClass('on');
        $('body').toggleClass('crop')
    });
});

/**
 * Super Class
 */
class CommonUI {
    name = 'commonUi';
    el;
    $el;
    //$wrap;
    $window;
    $document;
    $html;
    $body;
    //$container;
    uiId;
    eventId;
    selector;

    /**
     * @param name {string} UI이름을 정의한다(example: tooltip)
     * @param el {HTMLElement} UI요소 한개에 해당하는 요소를 넣는다.(ui-xxxx클래스가 붙는 ui요소)
     */
    constructor(name, el, selector) {
        this.name = name;

        this.$window = $(window);
        this.$document = $(document);
        this.$html = $('html');
        this.$body = $('body');
        //this.$wrap = $('#wrap-mmk');
        //this.$container = $('#container_mmk');

        this.el = el;
        this.$el = $(el);
        this.selector = selector;

        this.setEventId();
    }

    /**
     * ui의 이벤트ID 생성 ex) uiName-0000
     */
    setEventId() {
        this.uiId = `${this.name}-${this.getRandomStr()}`;
        this.eventId = `.${this.uiId}`;
    }

    /**
     * 최대 6자리 랜덤 숫자
     * @returns {number}
     */
    getRandomStr() {
        // return ((new Date().getTime()+'').substr(8, 5)*Math.PI + '').split('.')[1];
        return Math.round(Math.random() * 100000);
    }

    /**
     * 옵션은 모두 data-xxx 형태로 넘어오게 되고 해당 값의 유형에 맞게 변환해준다.
     * $('selector').data() 하게되면 해당 data-요소가 모두 들어오게 된다.
     * @returns {object} -
     * @param options {} 예: data-no="1" data-type="type1" { no: 1, type: 'type1' }
     */
    parseOptions(options) {
        let splitString;
        let numberArray = [];

        if (typeof options.no == 'string') {
            splitString = options.no.split(',');
            console.log(splitString);
            splitString.map((item) => {
                numberArray.push(+item);
            });

            options.no = numberArray;
        }

        return options;
    }
}

/**
 * ScrollAnimation
 */
class ScrollAnimation extends CommonUI {
    defaults = {};

    constructor(el, options) {
        super('scrollAnimation', el);

        this.init(el, options);
    }

    init(el, options) {
        this.defaults = {...this.defaults, ...this.parseOptions(options)};
        this.render();
    }

    update() {
        this.detachEvents();
        this.attachEvents();
    }

    render() {
        const getScrollParent = (node) => {
            if (node === null) return null; 
            const overflowY = window.getComputedStyle(node).overflowY;
            if (node.scrollHeight > node.clientHeight && overflowY !== 'visible' && overflowY !== 'hidden') {
                return node;
            } else if (node.tagName.toLowerCase() === 'body' ) {
                return window;
            } else {
                return getScrollParent(node.parentNode)
            }
        }

        const _that = this;
        this.animationGroup = this.$el;
        this.animationGroup.find('svg path').each((idx, el) => {
            _that.svgLengthCheck(el);
        });
        
        if (this.$el[0].offsetParent === null) {
            const that = this;

            function containerCheck() {
                if(that.$el[0].offsetParent === null) {
                    window.requestAnimationFrame(containerCheck)
                } else {
                    setTimeout(function(){
                        const scrollableEl = getScrollParent(that.$el[0]);
                        that.scrollTarget = scrollableEl;
                        that.animationActive();
                        that.detachEvents();
                        that.attachEvents();
                    }, 500)
                }
            }
            window.requestAnimationFrame(containerCheck)
        } else {
            const scrollableEl = getScrollParent(this.$el[0]);
            this.scrollTarget = scrollableEl;
            this.animationActive();
            this.detachEvents();
            this.attachEvents();
        }
    }

    svgLengthCheck(el){
        const totalLength = el.getTotalLength();
        $(el).css({
          'stroke-dasharray': totalLength,
          'stroke-dashoffset': totalLength
        });
    }

    itemInView(box) {
        const $itemWrap = $(box);
        const activeTiming = 150;

        $itemWrap.find('[data-role="animation-item"]').each((idx, item) => {
            setTimeout(() => {
                if ($(item),$(item).closest('.ui-swiper').length == 0) {
                    $(item).addClass('active');
                }
            }, activeTiming * idx);
        })
    }

    animationActive() {
        if (this.scrollTarget === window) {
            if (!this.$el.hasClass('inScroll')) {
                if (this.$el.offset().top <= $(window).scrollTop() + (window.innerHeight * 0.8)){
                    this.$el.addClass('inScroll');
                    this.itemInView(this.$el[0])
                }
            }
        } else {
            if (!this.$el.hasClass('inScroll')) {
                if (this.$el.offset().top <= (window.innerHeight - (window.innerHeight / 3))) {
                // if (this.$el.offset().top <= (window.innerHeight - (window.innerHeight / 3))) {
                    this.$el.addClass('inScroll');
                    this.itemInView(this.$el[0])
                }
            }
        }
    }

    attachEvents() {        
        $(this.scrollTarget).on(`scroll${this.eventId}`, (e) => {
            this.animationActive();
        });
    }

    detachEvents() {
        $(this.scrollTarget).off(this.eventId);
    }

    destroy() {
        this.detachEvents();
    }
}

/**
 * Tab
 */
class Tab extends CommonUI {
    defaults = {
        no: 0,
        tabArr: []
    };

    constructor(el, options) {
        super('tab', el);

        this.init(el, options);
    }

    init(el, options) {
        if (options) {
            this.defaults = {...this.defaults, ...this.parseOptions(options)};
        }

        this.render();
    }

    update() {
        this.checkShowButton();
        this.setPosition();
    }

    render() {
        this.detachEvents();

        const $uiTabNav = this.$el.find('.ui-tab-nav > ul');

        $uiTabNav.attr({role: 'tablist'});
        $uiTabNav.find('li').attr({role: 'none'});
        $uiTabNav.find('li a').attr({role: 'tab'});

        this.attachCommonEvents();
        this.setPosition();
        this.$window.trigger(`resize${this.eventId}`);
        if (this.$el.find('.ui-tab-nav li').length !== this.$el.find('.ui-tab-content').length) {
            let activeIndex = this.$el.find('.ui-tab-nav li.active').index();
            activeIndex = activeIndex === -1 ? 0 : activeIndex;
            this.a11y(activeIndex);
            return;
        }

        this.$el.find('.ui-tab-nav li').each((idx,el)=>{
            this.defaults.tabArr.push($(el).scrollTop())
        })

        this.attachStaticEvents();
        this.open(this.defaults.no);
    }

    setPosition() {
        if (this.$el.find('.ui-tab-nav li.active').length <= 0) {
            this.$el.find('.ui-tab-nav li').eq(this.defaults.no).addClass('active');
        }

        // setActivePosition(this.$el.find('.ui-tab-nav'), this.$el.find('.ui-tab-nav li.active'));
    }

    attachStaticEvents() {
        this.$el.on(`click${this.eventId}`, '.ui-tab-nav a', (e) => {
            e.preventDefault();
            const $this = $(e.currentTarget);
            const index = $this.closest('li').index();

            if (this.defaults.flexScroll != undefined){
                const beforeActive = $this.closest('.ui-tab-nav').find('.active');
                this.defaults.tabArr[beforeActive.index()] = $('.page-inner-scroll').scrollTop();
            }

            this.open(index);
        });
    }

    attachCommonEvents() {
        this.$el.on(`click${this.eventId}`, '.ui-tab-btn-expand', (e) => {
            e.preventDefault();
            const $this = $(e.currentTarget);

            this.$el.toggleClass('open');
            if (this.$el.hasClass('open')) {
                $this.find('.hide-txt').text('접기');

            } else {
                $this.find('.hide-txt').text('펼치기');
                this.setPosition();
            }
        });

        this.$window.on(`resize${this.eventId}`, (e) => {
            this.checkShowButton();
        });
    }

    checkShowButton() {
        if (!this.$el.hasClass('open')) {
            if (this.$el.find('.ui-tab-nav').outerWidth() < this.$el.find('.tab-nav').width() + 50) {
                this.$el.find('.ui-tab-btn-expand').css('display', 'inline-flex');
            } else {
                this.$el.find('.ui-tab-btn-expand').css('display', 'none');
            }
        }
    }

    open(index) {
        this.$el.find('.ui-tab-nav li')
            .eq(index).addClass('active')
            .siblings().removeClass('active');
        this.$el.find('.ui-tab-content')[0] && this.$el.find('.ui-tab-content')
            .eq(index).show()
            .siblings().hide();
        if (this.defaults.flexScroll != undefined){
            this.$el.closest('.page-inner-scroll').scrollTop(this.defaults.tabArr[index])
        }

        this.setPosition();
        this.a11y(index);
    }

    a11y(index) {
        this.$el.find('.ui-tab-nav li a')
            .attr({'aria-selected': false})
            .eq(index)
            .attr({'aria-selected': true});
        // .find('.hide-txt').remove().end()
        // .eq(index).find('a').prepend(`<span class="hide-txt">선택됨</span>`);
    }

    detachEvents() {
        this.$el.off(this.eventId);
        this.$window.off(this.eventId);
    }

    destroy() {
        this.detachEvents();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const aniElements = document.querySelectorAll('[data-role="animation-group"]')
    Array.from(aniElements).forEach((el) => {
        const options = {...$(el).data()};
        const uiScrollAnimation = new ScrollAnimation(el, options);
        $(el).data('ui', uiScrollAnimation);
    });

    const tabElements = document.querySelectorAll('.ui-tab');
    Array.from(tabElements).forEach((el) => {
        const options = {...$(el).data()};
        const uiTab = new Tab(el, options);
        $(el).data('ui', uiTab);
    });
});