(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/brand/PinwheelMark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinwheelMark",
    ()=>PinwheelMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PinwheelMark({ rotation = 0, filled = [], // Derived from the ink token so the outline follows the theme without
// the caller having to know which theme is active.
hollowColor = "color-mix(in oklab, var(--color-ink) 30%, transparent)", strokeWidth = 9, className, duration = 0.9 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARK_VIEWBOX"],
        className: className,
        "aria-hidden": "true",
        overflow: "visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
            animate: {
                rotate: rotation
            },
            transition: {
                duration,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"].map((petal)=>{
                const isFilled = filled.includes(petal.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: petal.body,
                            fill: "none",
                            stroke: hollowColor,
                            strokeWidth: strokeWidth,
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: petal.head.cx,
                            cy: petal.head.cy,
                            rx: petal.head.rx,
                            ry: petal.head.ry,
                            transform: petal.head.transform,
                            fill: "none",
                            stroke: hollowColor,
                            strokeWidth: strokeWidth
                        }, void 0, false, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                            initial: false,
                            animate: {
                                opacity: isFilled ? 1 : 0
                            },
                            transition: {
                                duration: duration * 0.7,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: petal.body,
                                    fill: petal.color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: petal.head.cx,
                                    cy: petal.head.cy,
                                    rx: petal.head.rx,
                                    ry: petal.head.ry,
                                    transform: petal.head.transform,
                                    fill: petal.color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this)
                    ]
                }, petal.id, true, {
                    fileName: "[project]/src/components/brand/PinwheelMark.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/brand/PinwheelMark.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand/PinwheelMark.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = PinwheelMark;
var _c;
__turbopack_context__.k.register(_c, "PinwheelMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MegaMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CLIENTS_LINKS = [
    {
        label: "Client Information",
        href: "/clients"
    },
    {
        label: "Vendor Registration",
        href: "/vendor-registration"
    }
];
const CONTACT_LINKS = [
    {
        label: "Contact Information",
        href: "/contact"
    },
    {
        label: "Client Query",
        href: "/client-query"
    }
];
function NavLink({ href, children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "text-base relative inline-block py-2 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
        children: [
            children,
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -bottom-2 left-0 h-0.5 w-full bg-corporate-mark",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLink;
function SimpleDropdown({ label, links }) {
    _s1();
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-3 shadow-bar",
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: l.href,
                        onClick: closeNow,
                        className: "text-body block rounded-sm px-3 py-2 text-ink hover:bg-surface",
                        children: l.label
                    }, l.href, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s1(SimpleDropdown, "fqCqffjkqnghv6Wf3SsifJHaz44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"]
    ];
});
_c1 = SimpleDropdown;
function Header() {
    _s2();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Keeps --header-h (tokens.css) equal to this header's TRUE rendered
    // height at all times, including mid-transition as it shrinks from
    // 110px to 84px on scroll. HeroSequence's pinned stage reads this
    // variable to reserve exactly this much space and never sit under it.
    // A ResizeObserver rather than recomputing on the scroll/resize events
    // this component already listens to, so the reservation tracks the
    // header's own 420ms height transition smoothly instead of jumping.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const sync = {
                "Header.useEffect.sync": ()=>{
                    document.documentElement.style.setProperty("--header-h", `${el.getBoundingClientRect().height}px`);
                }
            }["Header.useEffect.sync"];
            sync();
            const ro = new ResizeObserver(sync);
            ro.observe(el);
            return ({
                "Header.useEffect": ()=>ro.disconnect()
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Lock background scroll while the mobile panel is open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!mobileOpen) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    // Focus trap + Escape-to-close for the mobile panel (PLAN.md section 3A).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!mobileOpen) return;
            const panel = panelRef.current;
            if (!panel) return;
            const focusables = {
                "Header.useEffect.focusables": ()=>Array.from(panel.querySelectorAll('a[href], button:not([disabled])'))
            }["Header.useEffect.focusables"];
            focusables()[0]?.focus();
            function onKeyDown(e) {
                if (e.key === "Escape") {
                    setMobileOpen(false);
                    hamburgerRef.current?.focus();
                    return;
                }
                if (e.key !== "Tab") return;
                const items = focusables();
                if (items.length === 0) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
            document.addEventListener("keydown", onKeyDown);
            return ({
                "Header.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 h-[72px] border-b border-hairline bg-surface transition-[height,box-shadow] duration-[var(--dur-base)] lg:h-[110px]", scrolled && "lg:h-[84px] lg:shadow-bar"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                className: "flex h-full items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-corporate-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-mark.png",
                                alt: "",
                                width: 45,
                                height: 44,
                                className: "h-9 w-auto lg:h-10",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-ink lg:text-xl",
                                        children: "Assertive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-small tracking-[0.04em] text-ink-muted",
                                        children: "Brand Communications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 lg:flex",
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                href: "/about",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MegaMenu"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
                                label: "Clients",
                                links: CLIENTS_LINKS
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleDropdown, {
                                label: "Contact",
                                links: CONTACT_LINKS
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                className: "h-10 w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    href: "/client-query",
                                    variant: "outline",
                                    children: "Client Query ↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: hamburgerRef,
                        type: "button",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink lg:hidden",
                        "aria-expanded": mobileOpen,
                        "aria-label": mobileOpen ? "Close menu" : "Open menu",
                        onClick: ()=>setMobileOpen((v)=>!v),
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 206,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    ref: panelRef,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Mobile navigation",
                    className: "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-surface lg:hidden",
                    initial: {
                        opacity: 0,
                        y: reduce ? 0 : -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: reduce ? 0 : -8
                    },
                    transition: {
                        duration: reduce ? 0.01 : 0.42,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                        className: "flex flex-col gap-8 py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-h3 text-ink",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-h3 text-ink",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-2 font-semibold", pillar.ink),
                                                    children: pillar.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-2",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id).map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/services/${service.slug}`,
                                                                onClick: ()=>setMobileOpen(false),
                                                                className: "text-body text-ink-body",
                                                                children: service.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, service.slug, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, pillar.id, true, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    CLIENTS_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-body text-ink",
                                            children: l.label
                                        }, l.href, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    CONTACT_LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-body text-ink",
                                            children: l.label
                                        }, l.href, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/client-query",
                                variant: "primary",
                                className: "justify-center",
                                children: "Client Query ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s2(Header, "3W1gZT9WBasZDp/0jzoy+fIkCMI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NavLink");
__turbopack_context__.k.register(_c1, "SimpleDropdown");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/MegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaMenu",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MegaMenu() {
    _s();
    const { open, rootProps, triggerProps, closeNow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ...rootProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                ...triggerProps,
                children: [
                    "Services",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MegaMenu.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,880px)] -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-8 shadow-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>{
                        const services = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === pillar.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-3 h-[3px] w-8", pillar.mark)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-3 font-semibold", pillar.ink),
                                    children: pillar.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 39,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/services/${service.slug}`,
                                                className: `text-small ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:underline", pillar.ink)}`,
                                                onClick: closeNow,
                                                children: service.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                                lineNumber: 43,
                                                columnNumber: 25
                                            }, this)
                                        }, service.slug, false, {
                                            fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                            lineNumber: 42,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, pillar.id, true, {
                            fileName: "[project]/src/components/layout/MegaMenu.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MegaMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MegaMenu.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/MegaMenu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(MegaMenu, "fqCqffjkqnghv6Wf3SsifJHaz44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$dropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"]
    ];
});
_c = MegaMenu;
var _c;
__turbopack_context__.k.register(_c, "MegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/AboutPortal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPortal",
    ()=>AboutPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-motion-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/*
 * ABOUT US - "The Portal", carried over from the /proto/portal concept.
 *
 * The heading is drawn twice, in one SVG, in perfect register:
 *   1. as BLACK text inside an SVG <mask>, over a WHITE full-stage rect.
 *      Black in a luminance mask = hidden, so every letterform punches a
 *      HOLE through the surface-coloured sheet covering the photograph.
 *   2. as INK text painted on top, filling those holes exactly.
 *
 * At rest the two cancel and it reads as an ordinary ink heading on the
 * page. Then, in order:
 *
 *   ink dissolves   you are suddenly looking THROUGH the letterforms at
 *                   the brand's own colour field
 *   the zoom        both layers scale about the viewport centre together,
 *                   up to 44x, until the letters have swallowed the screen
 *   the sheet goes  and the field is all there is
 *   the field recedes behind a surface scrim, and the three sentences rise
 *                   out of it, one per discipline colour
 *
 * WHY A COLOUR FIELD AND NOT A PHOTOGRAPH. This was first built falling
 * into a ballroom photograph (media/hall.png, since deleted - it had no
 * other use). Two problems, one fatal. The soft one: a generic stock
 * ballroom says nothing this agency specifically does. The fatal one: it
 * was 811x517, so full-bleed on a 1440px stage it was already being
 * upscaled about 1.8x before the portal magnified anything.
 * The field below is pure CSS, so it is resolution-independent - it stays
 * exactly as clean at 44x as at rest - it is built from the five petal
 * colours of the mark, and it costs no bytes. Falling through the words
 * into the brand's own spectrum is also simply a better idea than falling
 * into a photograph of someone else's venue.
 *
 * WHY SVG AND NOT background-clip:text - the holes have to mask the field
 * while the SAME glyphs are painted on top in ink at identical geometry.
 * Two DOM elements with clamp() sizes drift by a pixel or two under
 * sub-pixel rounding, which shows as a coloured fringe at rest. One SVG,
 * one font-size, one transform: they cannot drift.
 *
 * WHY THE FONT SIZE IS MEASURED, NOT GUESSED - see the probe below.
 * PLAN.md section 3.5 records hand-estimating a headline width being wrong
 * by a wide margin.
 *
 * WHY THE SCRIM EXISTS. The copy cannot sit on the bare field. Every ink
 * and mark token was solved against --color-surface, not against five
 * saturated primaries, and the hero already had to clear its flood wash
 * for exactly this reason (see the floodOpacity note in HeroSequence.tsx).
 * So the field is the TRANSITION material: full strength while you fall
 * into it, then dropped behind surface at 92% before a single word
 * arrives. Even the ghost that survives that is not free - it is what
 * pushed the accent rules off -mark and onto -ink; see STRATA below.
 *
 * REDUCED MOTION / NO JS are handled in CSS and never by returning a
 * different tree - useReducedMotion() is false during SSR, so branching
 * on it renders one structure on the server and another on the client
 * (a real hydration mismatch, see HeroSequence.tsx). In both degraded
 * modes the portal machinery is hidden outright and the copy layer -
 * which holds the real <h2> and all three sentences - is shown flowed.
 * .pin-stage / .pin-layer / .pin-portal do that work; see globals.css
 * and the noscript block in layout.tsx.
 */ const HEADING = "About Us";
/*
 * How far the masking sheet bleeds past the stage on each side, as a
 * fraction. Insurance against preserveAspectRatio letterboxing - the long
 * note beside the sheet explains what that looked like when it happened.
 *
 * THE NUMBER IS A PERFORMANCE FIGURE, not a taste one. This started at a
 * full 3x (one whole stage of margin on every side), which is 9x the AREA
 * of a luminance mask that the browser re-rasterizes on every frame the
 * zoom transform changes. At a 1440x788 stage that is a ~10 megapixel
 * offscreen buffer per frame, and it measured exactly as you would expect:
 * scrolling into this section ran 26-35ms per frame (about 30fps) from
 * p=0.0 to p=0.5, then snapped back to a clean 17ms at p>=0.6 - which is
 * precisely where sheetOpacity fades the sheet out and the mask stops
 * being painted at all. The zoom was never the expensive part.
 *
 * 8% keeps the same guarantee for any plausible sub-pixel or mid-
 * transition mismatch while cutting the rasterized area by about 6.7x.
 * Raising it back toward 1.0 will bring the stutter back; if a real
 * letterboxing gap ever reappears, fix the viewBox measurement rather
 * than widening this.
 */ const BLEED = 0.08;
const BLEED_SPAN = 1 + BLEED * 2;
/*
 * The client's About copy, verbatim. Three sentences that happen to be
 * three parallel statements - who we are, what we do, how we do it -
 * which is why they get parallel treatment rather than one prose block.
 * Each takes a discipline colour from the mark.
 *
 * USES -ink, NOT -mark, AND THAT IS MEASURED. -mark is the token solved
 * to 3:1 for exactly this job, but it is solved against the BARE surface,
 * and these rules do not sit on the bare surface - they sit on surface
 * blended with what is left of the colour field. Measured on the real
 * composite, all three came in at 2.67-2.77:1 against a 3:1 requirement;
 * on bare surface the same teal is 3.14:1, so the ghost alone costs about
 * 0.4 and there was never any headroom to lose. -ink is solved to 4.5:1,
 * which leaves enough slack to survive the composite in both themes.
 * This is the same failure mode as the hero's flood wash - see the
 * floodOpacity note in HeroSequence.tsx.
 */ const STRATA = [
    {
        key: "who",
        rule: "bg-corporate-ink",
        text: "Assertive Brand Communications is an event management company dedicated to crafting unforgettable experiences that elevate brands and engage audiences."
    },
    {
        key: "what",
        rule: "bg-activation-ink",
        text: "From corporate conferences to product launches, gala dinners to experiential marketing activations, we specialize in conceptualizing, planning, and executing events that leave a lasting impact."
    },
    {
        key: "how",
        rule: "bg-live-ink",
        text: "With a focus on creativity, precision, and client satisfaction, we blend innovation with meticulous attention to detail to deliver seamless and memorable events tailored to each client’s unique objectives and vision."
    }
];
/*
 * What lies behind the letters: the mark's own colour rotation.
 *
 * PETALS is ordered clockwise from twelve o'clock (see petals.ts - that
 * order is measured off the artwork, not alphabetical), so sweeping those
 * same five colours through a conic gradient reproduces the pinwheel's
 * actual rotation as light. The faint spokes where the stops meet are the
 * point, not an artefact.
 *
 * Uses `authored` - the raw artwork hex - rather than `color`, which is a
 * theme-aware token that gets lightness-corrected for the bone page.
 * Correction is right for a petal that has to hold 3:1 as a small shape on
 * the surface; here the colours ARE the surface, at full stage size, and
 * they want to be the vivid artwork values in both themes.
 *
 * An earlier version placed five separate radial blobs around the edges.
 * It failed for a specific reason worth keeping: the blobs left the
 * CENTRE - which is exactly where the letterforms are - falling back to
 * the dark base, so the holes read as near-black smudges with a bit of
 * colour at the extremes. A conic sweep has no gap to fall into.
 *
 * TWO DELIBERATE MOVES, both learned by looking at it full-screen:
 *
 * 1. The conic origin sits BELOW the stage (50% 112%). With it inside the
 *    frame you see the singularity where all five stops converge, and the
 *    whole thing stops being a brand field and starts being a colour
 *    picker. Pushed off the bottom edge, what is left is a fan of colour
 *    rising from the floor - which, for an events agency, happens to look
 *    exactly like uplighting.
 * 2. The stops are therefore SQUEEZED into the arc the WORD actually
 *    subtends from that origin, not spread evenly around all 360deg.
 *    Measured rather than guessed: with the origin below the stage, the
 *    heading's left and right edges sit at about -42deg and +42deg, so
 *    SPREAD is 88deg and the five stops land 22deg apart. Two earlier
 *    passes had them 72deg and then 52.5deg apart, and both times the
 *    teal and the purple pointed off-screen entirely - the field came out
 *    as a red-and-green wash with two fifths of the palette missing. At
 *    22deg the whole mark lights the whole word, left to right.
 *
 * WRAP is not decoration. A conic gradient holds its last colour from the
 * final stop all the way round to 360deg and then jumps straight back to
 * the first, which puts a hard-edged seam at the `from` angle - and at
 * -44deg that seam falls inside the visible stage as a visible crease.
 * Repeating the first colour at 360deg turns that jump into a long, slow
 * interpolation across the off-word region instead.
 *
 * The scrim (listed first, so it paints on top) keeps this at roughly a
 * third strength. At full saturation five primaries across an entire
 * viewport is garish beside the restraint of every other section; damped,
 * it reads as deep jewel tones that are still unmistakably ours.
 */ const SPREAD = 88;
const FIELD = [
    "radial-gradient(100% 90% at 50% 55%, oklch(10% 0.02 275 / 0.18) 0%, oklch(8% 0.02 275 / 0.62) 100%)",
    `conic-gradient(from ${-SPREAD / 2}deg at 50% 112%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"].map((x, i)=>`${x.authored} ${(i * SPREAD / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"].length - 1)).toFixed(1)}deg`).join(", ")}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"][0].authored} 360deg)`
].join(", ");
function AboutPortal() {
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: wrapRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // ---- stage geometry -------------------------------------------------
    // MEASURED FROM THE STAGE, NOT FROM THE WINDOW. The stage is
    // 100svh - --header-h tall, so window.innerHeight overstates it by the
    // header. Feeding that into the viewBox gives the SVG a taller aspect
    // ratio than the element it renders into, and preserveAspectRatio's
    // default (xMidYMid meet) then letterboxes: the sheet is scaled down to
    // fit by height and centred, leaving a bare vertical strip of the
    // photograph down BOTH edges of the stage at all times. It looks like a
    // deliberate border until you resize the window and watch it change.
    // Observing the element itself is also self-correcting - it picks up
    // Header's own height animation for free, with no second source of
    // truth to drift.
    //
    // Initialised to a constant so the server and the first client render
    // agree; real numbers land after hydration.
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vp, setVp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w: 1440,
        h: 788
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutPortal.useEffect": ()=>{
            const el = stageRef.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "AboutPortal.useEffect": ([entry])=>{
                    const { width, height } = entry.contentRect;
                    if (width > 0 && height > 0) setVp({
                        w: width,
                        h: height
                    });
                }
            }["AboutPortal.useEffect"]);
            ro.observe(el);
            return ({
                "AboutPortal.useEffect": ()=>ro.disconnect()
            })["AboutPortal.useEffect"];
        }
    }["AboutPortal.useEffect"], []);
    const cx = vp.w / 2;
    const cy = vp.h / 2;
    // ---- measured type size ---------------------------------------------
    // A hidden probe glyph run at a known size gives the real advance width
    // of this exact string in this exact font, so the heading fills the
    // stage at any viewport without a single magic number.
    const probeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [unitWidth, setUnitWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutPortal.useEffect": ()=>{
            const measure = {
                "AboutPortal.useEffect.measure": ()=>{
                    if (!probeRef.current) return;
                    const w = probeRef.current.getBBox().width;
                    if (w > 0) setUnitWidth(w / 100);
                }
            }["AboutPortal.useEffect.measure"];
            measure();
            // Webfonts land after first paint; remeasure once they do.
            document.fonts?.ready.then(measure);
        }
    }["AboutPortal.useEffect"], [
        vp.w
    ]);
    const gutter = vp.w < 640 ? 20 : 48;
    const fontSize = unitWidth ? Math.max(40, Math.min(260, (vp.w - gutter * 2) / unitWidth)) : Math.max(40, Math.min(260, vp.w * 0.17));
    // ---- scroll choreography --------------------------------------------
    const cueOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.1
    ], [
        1,
        0
    ]);
    const inkOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.12,
        0.26
    ], [
        1,
        0
    ]);
    // Exponential stops. A linear 1 -> 44 ramp reads as "nothing, nothing,
    // nothing, WHOOSH"; these keep the apparent rate of approach steady.
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.24,
        0.38,
        0.5,
        0.62,
        0.74
    ], [
        1,
        2.4,
        6.5,
        17,
        44
    ]);
    const sheetOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.6,
        0.7
    ], [
        1,
        0
    ]);
    // The field drifts and turns very slightly against the zoom. Without it
    // the colour behind the letters is completely static and the holes read
    // as flat swatches rather than as a window onto something.
    const fieldScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.86
    ], [
        1.18,
        1
    ]);
    const fieldSpin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.86
    ], [
        -8,
        4
    ]);
    const fieldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`scale(${fieldScale}) rotate(${fieldSpin}deg)`;
    // 0.70 -> 0.76 is deliberately empty: the sheet has gone and the scrim
    // has not started, so there is one clear beat of standing in the room
    // before the section starts talking.
    const scrimOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.76,
        0.86
    ], [
        0,
        0.92
    ]);
    const maskG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inkG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Both groups take the SAME transform string, so the holes and the ink
    // fill cannot separate. Written as an attribute rather than a style
    // transform so there is no transform-box / transform-origin question on
    // an SVG group - the origin is explicit in the matrix.
    const identity = `translate(${cx} ${cy}) scale(1) translate(${-cx} ${-cy})`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scale, "change", {
        "AboutPortal.useMotionValueEvent": (s)=>{
            const t = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
            maskG.current?.setAttribute("transform", t);
            inkG.current?.setAttribute("transform", t);
        }
    }["AboutPortal.useMotionValueEvent"]);
    const cueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inkLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sheetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(cueRef, {
        opacity: cueOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(inkLayerRef, {
        opacity: inkOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(sheetRef, {
        opacity: sheetOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(fieldRef, {
        transform: fieldTransform
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(scrimRef, {
        opacity: scrimOpacity
    });
    const textProps = {
        textAnchor: "middle",
        x: cx,
        y: cy,
        dominantBaseline: "middle",
        fontSize,
        letterSpacing: "-0.04em",
        style: {
            fontFamily: "var(--font-display)",
            fontWeight: 800
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "about",
        ref: wrapRef,
        className: "pin-wrap relative h-[360svh] motion-reduce:h-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stageRef,
            className: "pin-stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: fieldRef,
                    "aria-hidden": "true",
                    className: "pin-portal absolute -inset-[18%] will-change-transform motion-reduce:hidden",
                    style: {
                        background: FIELD
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrimRef,
                    "aria-hidden": "true",
                    className: "pin-portal absolute inset-0 bg-surface motion-reduce:hidden",
                    style: {
                        opacity: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "pin-portal absolute inset-0 h-full w-full motion-reduce:hidden",
                    viewBox: `0 0 ${vp.w} ${vp.h}`,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                id: "about-portal-mask",
                                maskUnits: "userSpaceOnUse",
                                x: -vp.w * BLEED,
                                y: -vp.h * BLEED,
                                width: vp.w * BLEED_SPAN,
                                height: vp.h * BLEED_SPAN,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: -vp.w * BLEED,
                                        y: -vp.h * BLEED,
                                        width: vp.w * BLEED_SPAN,
                                        height: vp.h * BLEED_SPAN,
                                        fill: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        ref: maskG,
                                        transform: identity,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            ...textProps,
                                            fill: "#000",
                                            children: HEADING
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            ref: probeRef,
                            x: -9999,
                            y: -9999,
                            fontSize: 100,
                            letterSpacing: "-0.04em",
                            style: {
                                fontFamily: "var(--font-display)",
                                fontWeight: 800
                            },
                            fill: "none",
                            children: HEADING
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            ref: sheetRef,
                            x: -vp.w * BLEED,
                            y: -vp.h * BLEED,
                            width: vp.w * BLEED_SPAN,
                            height: vp.h * BLEED_SPAN,
                            fill: "var(--color-surface)",
                            mask: "url(#about-portal-mask)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            ref: inkLayerRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                ref: inkG,
                                transform: identity,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    ...textProps,
                                    fill: "var(--color-ink)",
                                    children: HEADING
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: cueRef,
                    "aria-hidden": "true",
                    className: "pin-portal pointer-events-none absolute inset-x-0 bottom-[max(40px,7vh)] flex justify-center motion-reduce:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-eyebrow uppercase text-ink-muted",
                        children: "Scroll to step inside"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pin-layer pointer-events-none absolute inset-0 flex items-center motion-reduce:static motion-reduce:py-[clamp(64px,8vw,128px)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto mx-auto w-full max-w-[1440px] px-6 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                p: p,
                                at: [
                                    0.82,
                                    0.88
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-eyebrow uppercase text-ink-muted",
                                    children: HEADING
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-10",
                                children: STRATA.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                        p: p,
                                        at: [
                                            0.85 + i * 0.03,
                                            0.91 + i * 0.03
                                        ],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: `block h-1 w-14 rounded-full ${s.rule}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-body-lg mt-5 text-ink-body",
                                                children: s.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.key, true, {
                                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stratum, {
                                p: p,
                                at: [
                                    0.94,
                                    1
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "mt-10 inline-flex items-center gap-1.5 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        "Know More About Us",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutPortal.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/AboutPortal.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutPortal.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/AboutPortal.tsx",
            lineNumber: 320,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutPortal.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(AboutPortal, "126Iy8UkuncylELiwmI7Fwon67g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"]
    ];
});
_c = AboutPortal;
/*
 * One strand of the closing copy, faded and lifted into place on its own
 * slice of the timeline.
 *
 * The motion-reduce:! utilities are load-bearing, not decorative. An
 * important declaration in a stylesheet outranks a non-important inline
 * style, and useMotionStyles writes non-important inline styles - so
 * under reduced motion these pin the strand to fully visible and beat
 * anything the scroll timeline tries to write. Without them the copy
 * would sit at its p=0 value, opacity 0, permanently invisible.
 */ function Stratum({ p, at, children }) {
    _s1();
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, at, [
        0,
        1
    ]);
    const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, at, [
        22,
        0
    ]);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateY(${lift}px)`;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(ref, {
        opacity,
        transform
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "motion-reduce:!opacity-100 motion-reduce:!transform-none",
        style: {
            opacity: 0
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutPortal.tsx",
        lineNumber: 504,
        columnNumber: 5
    }, this);
}
_s1(Stratum, "MxXqvEl7mfBfsfch+DCKBVKpoF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"]
    ];
});
_c1 = Stratum;
var _c, _c1;
__turbopack_context__.k.register(_c, "AboutPortal");
__turbopack_context__.k.register(_c1, "Stratum");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Enquiry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Enquiry",
    ()=>Enquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/contact.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Enquiry() {
    _s();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const nameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const emailId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const phoneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const eventTypeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const messageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const eventType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === data.eventType)?.name ?? data.eventType;
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    source: "enquiry",
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    eventType,
                    message: data.message
                })
            });
            if (!res.ok) throw new Error();
            setSubmitted(true);
        } catch  {
            setError("Something went wrong sending your enquiry. Please try again, or call/email us directly.");
        } finally{
            setSubmitting(false);
        }
    }
    return(// id is the FAQ's "ask us directly" target. scroll-mt keeps the jump
    // from landing under Header, which is sticky - --header-h is the same
    // live-measured value the pinned stages reserve against (tokens.css).
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        id: "enquiry",
        className: "scroll-mt-[var(--header-h)] bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            className: "text-corporate-ink",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-h2 mt-4 text-ink",
                            children: "Let Us Curate The Event For You"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                            children: "As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_HREF"],
                                    className: "inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 18,
                                            "aria-hidden": "true",
                                            className: "text-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL"]}`,
                                    className: "inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 18,
                                            "aria-hidden": "true",
                                            className: "text-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.08,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-surface-raised p-6 shadow-card sm:p-8",
                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "status",
                            className: "flex flex-col items-center py-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 40,
                                    "aria-hidden": "true",
                                    className: "text-live-ink"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-h3 mt-4 text-ink",
                                    children: "Thank you"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mt-2 text-ink-body",
                                    children: "Your enquiry has been received. Our team will get back to you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-5",
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Your Name",
                                    id: nameId,
                                    name: "name",
                                    required: true,
                                    autoComplete: "name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Email",
                                    id: emailId,
                                    name: "email",
                                    type: "email",
                                    required: true,
                                    autoComplete: "email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Phone",
                                    id: phoneId,
                                    name: "phone",
                                    type: "tel",
                                    required: true,
                                    autoComplete: "tel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: eventTypeId,
                                            className: "text-small font-medium text-ink",
                                            children: [
                                                "Event Type ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: " (required)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: eventTypeId,
                                            name: "eventType",
                                            required: true,
                                            defaultValue: "",
                                            className: "text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "Select an event type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: pillar.id,
                                                        children: pillar.name
                                                    }, pillar.id, false, {
                                                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: messageId,
                                            className: "text-small font-medium text-ink",
                                            children: [
                                                "Your Message ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: " (required)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: messageId,
                                            name: "message",
                                            required: true,
                                            rows: 4,
                                            className: "text-body resize-none rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this),
                                error && // #dc2626 is a literal, not a token - this codebase's
                                // colours are all solved per-theme (tokens.css), and no
                                // error/danger token exists yet. Same call WhatsAppWidget
                                // already made for its own inline validation message
                                // (#f15c6d there): a plain hex via style, not an untested
                                // dark: variant this project's theming does not use.
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "text-small",
                                    style: {
                                        color: "#dc2626"
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 182,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    variant: "primary",
                                    disabled: submitting,
                                    className: "mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-70",
                                    children: submitting ? "Sending..." : "Send Enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Enquiry.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Enquiry.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Enquiry.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Enquiry.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this));
}
_s(Enquiry, "iPSOYOudUA4z9eJBuT0/In7+Xlk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Enquiry;
function Field({ label, id, name, type = "text", required, autoComplete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "text-small font-medium text-ink",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Enquiry.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: " (required)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Enquiry.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Enquiry.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Enquiry.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: name,
                type: type,
                required: required,
                autoComplete: autoComplete,
                className: "text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Enquiry.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Enquiry.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "Enquiry");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/HeroSequence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSequence",
    ()=>HeroSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/PinwheelMark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/petals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-motion-styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
/*
 * THE OPENING SEQUENCE - one pinned stage, one scroll timeline.
 *
 * Act 1  "From Concept to Celebration: Unforgettable Experiences" opens as
 *        OUTLINE type - drawn but not yet made, which is what concept looks
 *        like. Five threads, one per figure in the logo, sweep across and
 *        leave the words SOLID behind them: the headline is built by the
 *        brand palette. The threads gather, resolve into the mark, and the
 *        mark floods the screen.
 * Act 2  "Five disciplines. One team on the floor." rises out of the flood
 *        and anchors to the top of the stage.
 * Act 3  The mark returns hollow. The wheel turns one petal per beat; each
 *        turn claims a figure in its real logo colour and names the
 *        discipline it stands for. After five turns it has come full circle
 *        and the logo is whole.
 *
 * WHY ONE COMPONENT AND NOT TWO. This was first built as a Threads hero
 * followed by a separate pinned Petals section, and that is structurally
 * incapable of working: two sticky stages means the first one is scrolling
 * out of the top of the viewport while the second scrolls in from the
 * bottom, so for a full screen-height the handover line is visible TWICE,
 * once near each edge. Matching the two copies pixel for pixel does not
 * help - the duplication is the sticky mechanics, not the styling. One
 * wrapper, one sticky child and one progress value means the line is a
 * single element that simply moves.
 *
 * WHY EVERY SCROLL-LINKED STYLE GOES THROUGH useMotionStyles. Binding a
 * useScroll-derived MotionValue to a motion component's style prop makes
 * Motion hand the animation to a native CSS ViewTimeline, whose progress
 * is a different curve from useScroll's offset. The paint then silently
 * desyncs from the value. See the note in use-motion-styles.ts.
 *
 * NOTHING HERE HARDCODES A THEME. An earlier pass forced Act 3 onto a dark
 * stage to rescue the amber figure (#fcd088 is only about 1.3:1 on the bone
 * page). That is now the theme system's job: the petal tokens resolve to the
 * authored artwork colours in dark and to lightness-corrected ones in light,
 * so this component just uses surface / ink / hairline and follows whichever
 * theme the visitor chose. See tokens.css.
 *
 * REDUCED MOTION is handled in CSS, never by returning a different tree.
 * useReducedMotion() is false during SSR, so branching on it renders one
 * structure on the server and another on the client - that produced a real
 * hydration mismatch plus Motion's "Target ref is defined but not
 * hydrated" error. The markup below is identical in both modes.
 */ const THREADS = [
    {
        key: "activation",
        color: "var(--color-activation-mark)",
        y: -0.34,
        len: 0.16,
        lag: 0.0
    },
    {
        key: "content",
        color: "var(--color-content-mark)",
        y: -0.14,
        len: 0.26,
        lag: 0.03
    },
    {
        key: "live",
        color: "var(--color-live-mark)",
        y: 0.06,
        len: 0.2,
        lag: 0.06
    },
    {
        key: "corporate",
        color: "var(--color-corporate-mark)",
        y: 0.26,
        len: 0.3,
        lag: 0.09
    },
    {
        key: "weddings",
        color: "var(--color-weddings-mark)",
        y: 0.46,
        len: 0.14,
        lag: 0.12
    }
];
const HEADLINE_STYLE = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(2.25rem, 0.9rem + 5.4vw, 5.5rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.035em"
};
/*
 * How far the solid layer's clip-path reaches PAST its own box, top and
 * bottom, as a percentage of that box.
 *
 * Without it the descenders never fill in. clip-path clips to the border
 * box, and lineHeight 1.02 above means the line box is barely taller than
 * the em - so Manrope's descenders paint below it. Measured at the 88px
 * cap: the h1 box ends at y=570 and the glyph run ends at y=584, i.e. 14px
 * of every g, p and y hanging outside. The outline layer has no clip-path
 * so it kept its descenders, the solid layer lost them, and the result was
 * a headline that filled in white except for the tails, which stayed as
 * hollow outlines for the whole sequence.
 *
 * Percent, not px, because the font-size is a clamp() - the overhang
 * scales with it, so a fixed pixel figure would be right at exactly one
 * viewport width. 25 is far more than the ~8% measured; there is nothing
 * else inside this layer, so over-reaching reveals nothing and costs
 * nothing. Negative inset() offsets are what expand a clip region outward
 * (verified supported before relying on it).
 */ const CLIP_BLEED = 25;
const ANCHOR_STYLE = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(1.75rem, 1rem + 3vw, 3rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.035em"
};
/** Beat 1 reveals the wheel; 1-5 are the petals; 6 is the close. */ const BEAT_AT = [
    0.47,
    0.57,
    0.66,
    0.75,
    0.84,
    0.93
];
const DISCIPLINES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PETALS"].map(_c = (petal, i)=>{
    const pillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === petal.id);
    return {
        ...petal,
        index: String(i + 1).padStart(2, "0"),
        name: pillar.name,
        blurb: pillar.blurb,
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].filter((s)=>s.pillar === petal.id)
    };
});
_c1 = DISCIPLINES;
function HeroSequence() {
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: wrapRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // ---- Act 1 ----------------------------------------------------------
    const wipeRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.25
    ], [
        100,
        0
    ]);
    const clip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`inset(${-CLIP_BLEED}% ${wipeRight}% ${-CLIP_BLEED}% 0)`;
    const front = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.25
    ], [
        0,
        100
    ]);
    const gather = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.25,
        0.31
    ], [
        0,
        1
    ]);
    const threadOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.02,
        0.05,
        0.29,
        0.33
    ], [
        0,
        1,
        1,
        0
    ]);
    const uiOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0,
        0.04,
        0.08
    ], [
        1,
        1,
        0
    ]);
    const headlineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.29,
        0.34
    ], [
        1,
        0
    ]);
    const markOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.28,
        0.31,
        0.36,
        0.39
    ], [
        0,
        1,
        1,
        0
    ]);
    const markTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.29,
        0.38
    ], [
        0.35,
        16
    ]), {
        "HeroSequence.useTransform[markTransform]": (s)=>`scale(${s})`
    }["HeroSequence.useTransform[markTransform]"]);
    // The flood carries the hand-off from Act 1 to Act 2 and is then CLEARED
    // before the wheel arrives. Leaving it up looked fine but is a real
    // contrast trap: the tint sits between the text and the page, and the
    // petal tokens were solved against the plain surface, not against a
    // purple wash. Measured over the flood, three petals dropped to 2.74-2.76:1
    // in light and the purple to 2.81:1 in dark - all under the 3:1 they are
    // supposed to hold. On the bare surface they are 3.01-13.01:1.
    const floodOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.32,
        0.38,
        0.47,
        0.53
    ], [
        0,
        1,
        1,
        0
    ]);
    // ---- Act 2: the line rises out of the flood and anchors -------------
    const lineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.37,
        0.42
    ], [
        0,
        1
    ]);
    // 1 = parked at centre, 0 = anchored at top. Scroll-linked rather than a
    // CSS transition so the move tracks the scroll instead of firing once.
    // 0.51em is half a line box at line-height 1.02 - using em rather than
    // 50% keeps the multiplication inside calc() unambiguous.
    const park = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.42,
        0.5
    ], [
        1,
        0
    ]);
    const lineTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateY(calc(${park} * (42svh - 0.51em)))`;
    // ---- Act 3 ----------------------------------------------------------
    const [beat, setBeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(p, "change", {
        "HeroSequence.useMotionValueEvent": (v)=>{
            let next = 0;
            for (const t of BEAT_AT)if (v >= t) next += 1;
            setBeat(next);
        }
    }["HeroSequence.useMotionValueEvent"]);
    const entered = beat >= 1;
    const active = beat >= 1 && beat <= 5 ? DISCIPLINES[beat - 1] : null;
    const rotation = beat <= 1 ? 0 : -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$petals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP"] * (beat - 1);
    const filled = DISCIPLINES.slice(0, Math.min(beat, 5)).map((d)=>d.id);
    const hue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(p, [
        0.04,
        0.1,
        0.16,
        0.22,
        0.28
    ], [
        26,
        79,
        146,
        220,
        314
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(hue, "change", {
        "HeroSequence.useMotionValueEvent": (h)=>{
            document.documentElement.style.setProperty("--brand-hue", String(h));
        }
    }["HeroSequence.useMotionValueEvent"]);
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const solidRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threadsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floodRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(eyebrowRef, {
        opacity: uiOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(headlineRef, {
        opacity: headlineOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(solidRef, {
        "clip-path": clip
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(threadsRef, {
        opacity: threadOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(ctaRef, {
        opacity: uiOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(markRef, {
        opacity: markOpacity,
        transform: markTransform
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(floodRef, {
        opacity: floodOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(lineRef, {
        opacity: lineOpacity,
        transform: lineTransform
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative h-[980svh] motion-reduce:h-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: floodRef,
                    "aria-hidden": "true",
                    className: "absolute inset-0 motion-reduce:hidden",
                    style: {
                        opacity: 0,
                        background: "radial-gradient(120% 120% at 50% 50%, var(--flood-inner) 0%, var(--flood-outer) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center motion-reduce:static motion-reduce:min-h-svh motion-reduce:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto w-full max-w-[1440px] px-6 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: eyebrowRef,
                                className: "text-eyebrow mb-6 uppercase text-ink-muted motion-reduce:!opacity-100",
                                children: "We create experiences"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: headlineRef,
                                className: "relative motion-reduce:!opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "relative",
                                        style: {
                                            ...HEADLINE_STYLE,
                                            WebkitTextStroke: "1.25px var(--color-ink)",
                                            color: "transparent"
                                        },
                                        children: [
                                            "From Concept to Celebration:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            "Unforgettable Experiences"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: solidRef,
                                        "aria-hidden": "true",
                                        // Both clip values carry the vertical bleed too - the
                                        // reduced-motion one because it is the FINAL state (fully
                                        // wiped), which is exactly where a clipped descender would
                                        // sit permanently, and the inline one because it is what
                                        // the server renders before any scroll value exists.
                                        className: "absolute inset-0 text-ink motion-reduce:![clip-path:inset(-25%_0_-25%_0)]",
                                        style: {
                                            ...HEADLINE_STYLE,
                                            clipPath: `inset(${-CLIP_BLEED}% 100% ${-CLIP_BLEED}% 0)`
                                        },
                                        children: [
                                            "From Concept to Celebration:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            "Unforgettable Experiences"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: threadsRef,
                                        "aria-hidden": "true",
                                        className: "pointer-events-none absolute inset-0 motion-reduce:hidden",
                                        style: {
                                            opacity: 0
                                        },
                                        children: THREADS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Thread, {
                                                thread: t,
                                                front: front,
                                                gather: gather
                                            }, t.key, false, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 hidden gap-2 motion-reduce:flex",
                                "aria-hidden": "true",
                                children: THREADS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-[5px] w-16 rounded-full",
                                        style: {
                                            background: t.color
                                        }
                                    }, t.key, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: ctaRef,
                                className: "mt-10 flex flex-wrap gap-4 motion-reduce:!opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/work",
                                        className: "rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                        children: "Explore Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                        children: "Know More About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: markRef,
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center motion-reduce:hidden",
                    style: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo-mark.png",
                        alt: "",
                        width: 729,
                        height: 710,
                        className: "h-[22vmin] w-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col px-6 lg:px-10 motion-reduce:static motion-reduce:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex h-full w-full max-w-[1440px] flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-[8svh] motion-reduce:pt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    ref: lineRef,
                                    className: "text-center text-ink motion-reduce:!opacity-100 motion-reduce:!transform-none",
                                    style: {
                                        ...ANCHOR_STYLE,
                                        opacity: 0
                                    },
                                    children: "Five disciplines. One team on the floor."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid flex-1 items-center gap-8 pb-[8svh] transition-opacity duration-[900ms] motion-reduce:!opacity-100 md:grid-cols-[minmax(0,42%)_minmax(0,1fr)] md:gap-14",
                                style: {
                                    opacity: entered ? 1 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mx-auto w-[min(46vw,340px)] md:w-full md:max-w-[420px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$PinwheelMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinwheelMark"], {
                                            rotation: rotation,
                                            filled: filled,
                                            className: "h-auto w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid min-h-[clamp(240px,34svh,340px)]",
                                        children: [
                                            DISCIPLINES.map((d, i)=>{
                                                const isActive = active?.id === d.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "aria-hidden": !isActive,
                                                    className: "col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo",
                                                    style: {
                                                        opacity: isActive ? 1 : 0,
                                                        /* Signed against the beat, so a discipline already
                           passed leaves upward and one still to come waits
                           below - the copy travels the same way the wheel
                           is turning, and reverses with it on scroll-up. */ transform: isActive ? "none" : `translateY(${i < beat - 1 ? -18 : 18}px)`,
                                                        /* Out faster than in, and in slightly behind, so
                           the two never sit at half opacity on top of each
                           other. */ transitionDuration: isActive ? "620ms" : "360ms",
                                                        transitionDelay: isActive ? "110ms" : "0ms",
                                                        // They overlap now, so only the live one is hittable.
                                                        pointerEvents: isActive ? "auto" : "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tabular-nums",
                                                            style: {
                                                                color: d.color,
                                                                fontFamily: "var(--font-display)",
                                                                fontWeight: 800,
                                                                fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4rem)",
                                                                letterSpacing: "-0.03em",
                                                                lineHeight: 1
                                                            },
                                                            children: d.index
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-h2 mt-3 text-ink",
                                                            children: d.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                                                            children: d.blurb
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-7 flex flex-wrap gap-2",
                                                            children: d.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/services/${s.slug}`,
                                                                        className: "text-sm inline-block rounded-full border px-3.5 py-1.5 text-ink-body transition-colors duration-[var(--dur-fast)] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                        style: {
                                                                            borderColor: `color-mix(in oklab, ${d.color} 45%, transparent)`
                                                                        },
                                                                        tabIndex: isActive ? 0 : -1,
                                                                        children: s.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, s.slug, false, {
                                                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, d.id, true, {
                                                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": beat !== 6,
                                                className: "col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo",
                                                style: {
                                                    opacity: beat === 6 ? 1 : 0,
                                                    // The close only ever arrives from below; there is no
                                                    // beat after it to leave upward for.
                                                    transform: beat === 6 ? "none" : "translateY(18px)",
                                                    transitionDuration: beat === 6 ? "620ms" : "360ms",
                                                    transitionDelay: beat === 6 ? "110ms" : "0ms",
                                                    pointerEvents: beat === 6 ? "auto" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-h2 max-w-[16ch] text-ink",
                                                        children: "Sixteen services. One accountable team."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-body-lg mt-4 max-w-[46ch] text-ink-body",
                                                        children: "Every figure in the mark is a discipline we run in-house, which is why a brief never has to be handed between agencies halfway through."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 flex flex-wrap gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/services",
                                                                // display:none used to take these out of the tab
                                                                // order for free; stacked and merely transparent,
                                                                // they would otherwise be focusable while invisible
                                                                // AND aria-hidden, which is the worst of both.
                                                                tabIndex: beat === 6 ? 0 : -1,
                                                                className: "rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                children: "View All Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/client-query",
                                                                tabIndex: beat === 6 ? 0 : -1,
                                                                className: "rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                                                children: "Start an Enquiry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "absolute inset-x-0 bottom-6 flex justify-center gap-2 transition-opacity duration-[900ms] motion-reduce:hidden",
                                style: {
                                    opacity: entered ? 1 : 0
                                },
                                children: DISCIPLINES.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1.5 rounded-full transition-all duration-[var(--dur-base)]",
                                        style: {
                                            width: beat === i + 1 ? 28 : 10,
                                            background: i < beat ? d.color : "var(--color-hairline)"
                                        }
                                    }, d.id, false, {
                                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSequence.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeroSequence.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeroSequence.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/HeroSequence.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroSequence.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(HeroSequence, "A2YIUN9OkYuYlgTAYUeoHKMILu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"]
    ];
});
_c2 = HeroSequence;
function Thread({ thread, front, gather }) {
    _s1();
    // Each thread trails the wipe front by its own lag, so the leading edge
    // reads as a braid rather than one hard line. On gather they converge on
    // 50% and their lengths collapse to nothing.
    const leftPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        front,
        gather
    ], {
        "Thread.useTransform[leftPct]": ([f, g])=>{
            const lagged = Math.max(0, f - thread.lag * 100);
            return lagged + (50 - lagged) * g;
        }
    }["Thread.useTransform[leftPct]"]);
    const widthPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(gather, [
        0,
        1
    ], [
        thread.len * 100,
        0
    ]);
    const left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`${leftPct}%`;
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`${widthPct}%`;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"])(ref, {
        left,
        width
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: "absolute h-[6px] -translate-x-full rounded-full",
        style: {
            top: `calc(50% + ${thread.y * 100}%)`,
            left: 0,
            width: 0,
            background: thread.color
        }
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroSequence.tsx",
        lineNumber: 512,
        columnNumber: 5
    }, this);
}
_s1(Thread, "c3j2306i/fQ5PdIDAWUuz0keOLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$motion$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionStyles"]
    ];
});
_c3 = Thread;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DISCIPLINES$PETALS.map");
__turbopack_context__.k.register(_c1, "DISCIPLINES");
__turbopack_context__.k.register(_c2, "HeroSequence");
__turbopack_context__.k.register(_c3, "Thread");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Scale.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scale",
    ()=>Scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$in$2d$view$2d$once$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-in-view-once.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/stats.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/*
 * PLAN.md Phase 7. Every STATS entry is currently value: null (section
 * 3.7 - the live site publishes no numbers, none may be invented), so
 * this renders four em-dashes and AnimatedNumber never actually runs on
 * the shipped site - it is dead code on the current data, kept ready for
 * whenever the client supplies real figures.
 *
 * Uses useInViewOnce (src/lib) rather than motion/react's own useInView.
 * While building this, motion's version intermittently failed to report
 * the target as in view during dev-mode testing; a plain IntersectionObserver
 * on the same element did not show the same failure in that same test.
 * Root cause was NOT conclusively isolated (React StrictMode's double
 * effect invocation and Turbopack HMR were both plausible confounds, and
 * time was better spent elsewhere given this path has zero effect on the
 * current site). useInViewOnce is a small, standard, directly-verifiable
 * IntersectionObserver hook with no other dependency - safe to ship
 * regardless of what was actually wrong with the alternative.
 */ function AnimatedNumber({ value }) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$in$2d$view$2d$once$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInViewOnce"])("-80px");
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reduced motion never enters the animate() branch at all - value is
    // rendered directly below instead of being synced into state via the
    // effect, so there is no synchronous setState-in-effect (the lint rule
    // this tripped: "Calling setState synchronously within an effect can
    // trigger cascading renders"). The animate() onUpdate callback below
    // IS the sanctioned pattern - state set from an external system's
    // per-frame callback, not from the effect body itself.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            if (!inView || reduce) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, value, {
                duration: 1.4,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                onUpdate: {
                    "AnimatedNumber.useEffect.controls": (v)=>setDisplay(Math.round(v))
                }["AnimatedNumber.useEffect.controls"]
            });
            return ({
                "AnimatedNumber.useEffect": ()=>controls.stop()
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        inView,
        reduce,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: reduce ? value : display
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Scale.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(AnimatedNumber, "Mi3S+oTWT/LgvHP5fDxT5d3kg8M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$in$2d$view$2d$once$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInViewOnce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = AnimatedNumber;
function Scale() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        as: "section",
        className: "bg-surface",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 divide-x divide-y divide-hairline border-y border-hairline sm:grid-cols-4 sm:divide-y-0",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS"].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 px-4 py-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-h2 tabular-nums text-ink",
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: stat.value === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink-muted",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Scale.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                            value: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Scale.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this),
                                        stat.suffix
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Scale.tsx",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Scale.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-small text-ink-muted",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Scale.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/src/components/sections/Scale.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Scale.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Scale.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Scale.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = Scale;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedNumber");
__turbopack_context__.k.register(_c1, "Scale");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
// outline + outline-offset draws the focus ring OUTSIDE the element, on
// the page background - so corporate-ink (4.53:1 on surface, PLAN.md
// section 2.3) stays a valid ring colour for every variant regardless of
// that variant's own fill.
const base = "group inline-flex items-center gap-2 font-medium transition-colors duration-[var(--dur-fast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink";
const variants = {
    primary: "rounded-md bg-corporate-fill px-6 py-3 text-white hover:bg-corporate-ink",
    secondary: "text-ink",
    outline: "rounded-md border border-hairline px-5 py-2.5 text-ink hover:border-ink"
};
function Button({ variant = "primary", children, className, href, type = "button", onClick, disabled }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === "secondary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-[var(--dur-fast)] group-hover:scale-x-100",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Button.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : children,
            variant === "primary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block transition-transform duration-[var(--dur-fast)] ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                "aria-hidden": "true",
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: classes,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CardStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardStack",
    ()=>CardStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/*
 * The pop stack. The cards sit as a fanned deck on the centre line of the
 * row; when the row reaches mid-screen they fly apart into their real grid
 * positions - two out to the left, two out to the right, the middle one
 * staying where it is. Leave the section in either direction and they
 * gather back into the deck, so every pass plays it again.
 *
 * IT IS TRIGGERED ON ENTRY, NOT TIED TO SCROLL POSITION. Scrubbing the
 * spread against scroll progress is the more obvious build and is wrong
 * here: it would mean the cards are only readable at one exact scroll
 * offset and any scroll away from it takes the copy back out of place.
 * Entry starts it, and it finishes on its own clock whatever the reader
 * does next.
 *
 * WHY THE LAYOUT IS NEVER TOUCHED. Every card renders in its normal grid
 * cell and stays there as far as layout is concerned - the deck is a
 * transform on a wrapper and nothing more. No reflow per frame, no
 * absolute positioning to unwind, and the server HTML is the finished
 * five-across row. With JS off, below the gate, or under
 * prefers-reduced-motion, no transform is ever written and this section is
 * exactly what it was before the file existed.
 */ /*
 * The gate. "two left, one middle, two right" only describes the xl
 * layout - the grid is 1 / 2 / 3 columns below that (see Pillars.tsx),
 * where there is no single middle card and the deck would have to collapse
 * across two rows. Under the gate the cards keep the plain staggered fade
 * they always had.
 */ const SPREAD_AT = "(min-width: 1280px)";
/*
 * TWO BANDS, NOT ONE LINE. Opening and closing cannot share a trigger,
 * because a single line means the deck re-stacks at the exact scroll
 * position where it opened - nudge the wheel back and forth across it and
 * the cards flap. Both are rootMargins, so both read as screen positions:
 *
 *   OPEN  in the middle 20% of the screen. Scrolling down, the row
 *         overlaps it once its top passes 60% of viewport height;
 *         scrolling up, once its bottom passes 40%. Either direction, the
 *         pop starts as the row reaches mid-screen and lands with it
 *         comfortably placed.
 *
 *   SHUT  on leaving the middle 60%, which is to say once the row is on
 *         its way out of frame but still visibly in it - measured, about
 *         60% of the row is still on screen at that moment, which is what
 *         makes the gathering-up something you watch rather than something
 *         that has silently already happened. Off the top and off the
 *         bottom both count.
 *
 * The gap between the two bands is the hysteresis and it is generous on
 * purpose: everywhere a reader would actually stop to read the cards sits
 * inside it, so the deck holds open there and only re-stacks once they
 * have committed to scrolling away.
 */ const OPEN_BAND = "-40% 0px -40% 0px";
const HOLD_BAND = "-20% 0px -20% 0px";
const OPEN_MS = 0.75;
const SHUT_MS = 0.5; // gathering up is a reset; it should not dawdle
const STEP = 0.07; // extra delay per step out from the middle card
const STAGGER = 0.08; // per-card fade delay when the stack is NOT running
const EASE = [
    0.16,
    1,
    0.3,
    1
]; // matches Reveal
/*
 * Deck shape, per step out from the middle card.
 *
 * SPLAY is doing most of the work and is the one that is easy to leave
 * out. Five identical cards stacked on a shared centre and rotated are
 * still five identical cards on a shared centre: the top one covers the
 * others almost completely and only the corners escape. Tuned against the
 * LIGHT theme, where a card and the section behind it sit at nearly the
 * same value and a peeking edge is close to invisible - dark has far more
 * separation to spare and reads fine at these numbers too.
 */ const SPLAY = 22; // px sideways, in the direction the card will travel
const TILT = 8; // deg
const DIP = 0.05; // scale
const DROP = 14; // px below the top card
const blank = ()=>({
        el: null,
        dx: 0,
        dy: 0,
        rot: 0,
        sc: 1,
        z: 0,
        t: 1,
        to: 1,
        run: null
    });
// useLayoutEffect warns when a client component is server-rendered; the
// measurement genuinely has to happen before paint, so swap the hook rather
// than the timing.
const useIsoLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function CardStack({ className, children }) {
    _s();
    const count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Set up by the layout effect below, which owns the geometry; the
    // in-view effect only says which way to go.
    const driver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [armed, setArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const midScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        margin: OPEN_BAND
    });
    const inFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        margin: HOLD_BAND
    });
    const cell = (i)=>cells.current[i] ??= blank();
    useIsoLayoutEffect({
        "CardStack.useIsoLayoutEffect": ()=>{
            const grid = gridRef.current;
            if (!grid) return;
            const mid = (count - 1) / 2;
            /* Interpolate the whole deck from one scalar. At rest in the open
       state the transform is dropped entirely rather than written as an
       identity, which keeps the finished DOM clean. */ const paint = {
                "CardStack.useIsoLayoutEffect.paint": (c)=>{
                    if (!c.el) return;
                    const k = 1 - c.t;
                    const flat = k < 0.001;
                    c.el.style.transform = flat ? "" : `translateX(${(c.dx * k).toFixed(2)}px) translateY(${(c.dy * k).toFixed(2)}px)` + ` scale(${(1 - (1 - c.sc) * k).toFixed(4)}) rotate(${(c.rot * k).toFixed(2)}deg)`;
                    /* Deck order only means anything while the cards overlap. Held past
         that it outlives its purpose and starts costing something: the
         card hover paints a 40px-blur shadow well into its neighbours'
         boxes, and a card left on a lower layer has that shadow drawn
         UNDER them. Cleared with the transform, restored with it. */ c.el.style.zIndex = flat ? "" : String(c.z);
                }
            }["CardStack.useIsoLayoutEffect.paint"];
            const off = {
                "CardStack.useIsoLayoutEffect.off": ()=>{
                    for (const c of cells.current){
                        if (!c) continue;
                        c.run?.stop();
                        c.run = null;
                        c.t = c.to = 1;
                        c.dx = c.dy = c.rot = 0;
                        c.sc = 1;
                        if (c.el) {
                            c.el.style.transform = "";
                            c.el.style.zIndex = "";
                            c.el.style.willChange = "";
                        }
                    }
                    return false;
                }
            }["CardStack.useIsoLayoutEffect.off"];
            const place = {
                "CardStack.useIsoLayoutEffect.place": ()=>{
                    if (!window.matchMedia(SPREAD_AT).matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        return off();
                    }
                    /*
       * Measure from identity. getBoundingClientRect reports the
       * TRANSFORMED box, so on a resize mid-deck the cards are already
       * displaced and reading them where they sit would compound the
       * offset every time. Clearing first costs one extra layout pass on
       * mount and on resize, and nothing at all per frame.
       *
       * Rects rather than offsetLeft: offsetLeft is relative to whatever
       * the offsetParent happens to be, which would make this component
       * silently depend on its caller having set `position: relative`.
       */ for (const c of cells.current)if (c?.el) c.el.style.transform = "";
                    const box = grid.getBoundingClientRect();
                    const line = box.left + box.width / 2;
                    cells.current.forEach({
                        "CardStack.useIsoLayoutEffect.place": (c, i)=>{
                            if (!c?.el) return;
                            const r = c.el.getBoundingClientRect();
                            const step = i - mid;
                            const away = Math.abs(step);
                            c.dx = line - (r.left + r.width / 2) + step * SPLAY;
                            c.dy = away * DROP;
                            c.rot = step * TILT;
                            c.sc = 1 - away * DIP;
                            // Grid items honour z-index without being positioned, so the
                            // middle card can be the top of the deck with no stacking context.
                            // paint() is what actually writes it - see the note there.
                            c.z = count - away;
                            /* Promoted for as long as the stack is live, not just while a
           given pop runs. These transforms are written from JS, so the
           compositor never adopts them on its own the way it would a CSS
           or WAAPI animation - without this every frame repaints five
           cards of text on the main thread. Promoting and demoting around
           each pass would rebuild the layers on every scroll through the
           section, which costs more than holding five card-sized layers
           on a desktop-only breakpoint. */ c.el.style.willChange = "transform";
                            paint(c);
                        }
                    }["CardStack.useIsoLayoutEffect.place"]);
                    return true;
                }
            }["CardStack.useIsoLayoutEffect.place"];
            const on = place();
            if (on) {
                // First paint is the closed deck. Deliberately not conditioned on
                // whether the row is already in view: if it is, the observer fires a
                // moment later and the pop simply plays at once, which is the right
                // thing to see when a reader lands mid-page.
                for (const c of cells.current){
                    if (!c) continue;
                    c.t = c.to = 0;
                    paint(c);
                }
                open.current = false;
            }
            setArmed(on);
            // A resize moves the columns, so the offsets that put each card on the
            // centre line move with them. place() rewrites them and repaints at
            // whatever t the deck is currently sitting at, open, shut or mid-flight.
            const ro = new ResizeObserver({
                "CardStack.useIsoLayoutEffect": ()=>setArmed(place())
            }["CardStack.useIsoLayoutEffect"]);
            ro.observe(grid);
            // paint lives in this closure, so the animation effect below drives the
            // cards through it rather than duplicating the maths.
            driver.current = ({
                "CardStack.useIsoLayoutEffect": (i, to)=>{
                    const c = cells.current[i];
                    if (!c?.el || c.to === to) return;
                    c.to = to;
                    c.run?.stop();
                    const away = Math.abs(i - mid);
                    c.run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(c.t, to, {
                        duration: to === 1 ? OPEN_MS : SHUT_MS,
                        // Opening, the pair nearest the middle leaves first and the outer
                        // pair chases it. Closing runs the other way, so the far cards
                        // come home first - it reads as a hand gathering them up.
                        delay: (to === 1 ? away : mid - away) * STEP,
                        ease: EASE,
                        onUpdate: {
                            "CardStack.useIsoLayoutEffect": (v)=>{
                                c.t = v;
                                paint(c);
                            }
                        }["CardStack.useIsoLayoutEffect"]
                    });
                }
            })["CardStack.useIsoLayoutEffect"];
            return ({
                "CardStack.useIsoLayoutEffect": ()=>{
                    ro.disconnect();
                    driver.current = null;
                    off();
                }
            })["CardStack.useIsoLayoutEffect"];
        }
    }["CardStack.useIsoLayoutEffect"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardStack.useEffect": ()=>{
            if (!armed || !driver.current) return;
            // Between the two bands the deck holds whatever state it is in; that
            // gap is where a reader sits while actually reading the cards.
            if (midScreen) open.current = true;
            else if (!inFrame) open.current = false;
            const to = open.current ? 1 : 0;
            for(let i = 0; i < count; i++)driver.current(i, to);
        }
    }["CardStack.useEffect"], [
        armed,
        midScreen,
        inFrame,
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gridRef,
        className: className,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (el)=>{
                    cell(i).el = el;
                },
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "h-full",
                    delay: armed ? 0 : i * STAGGER,
                    children: child
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CardStack.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CardStack.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CardStack.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s(CardStack, "vFrlTS4QrzwZoYtyyqAiwSi0QOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        useIsoLayoutEffect
    ];
});
_c = CardStack;
var _c;
__turbopack_context__.k.register(_c, "CardStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CaseStudyCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseStudyCarousel",
    ()=>CaseStudyCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pillars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/work.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/*
 * Two carousels, one inside the other, and they are deliberately NOT the
 * same instrument:
 *
 *   OUTER - one case study at a time. Loud: labelled arrows, a dot per
 *           study, arrow keys, swipe. Never auto-advances. This one holds
 *           three paragraphs of prose, and a panel that moves on its own
 *           while somebody is reading it is a bug, not a feature.
 *
 *   INNER - photographs of the one event. Quiet: dots only, no arrows, no
 *           labels, and it DOES advance on its own every ten seconds. There
 *           is nothing to read, so it costs a reader nothing to move.
 *
 * The pairing is the point. If the inner one grew arrows it would compete
 * with the outer one for the same gesture and the reader would stop being
 * able to tell which carousel a click belongs to.
 */ /* Long enough that a photo is a photo rather than a slideshow, and long
   enough to read the copy beside it without the picture changing mid-
   sentence. Restarted from zero on every manual dot press - see the timer. */ const DWELL = 10_000;
const SLIDE_MS = 520;
const FADE_MS = 700; // the inner crossfade; slower, it should not catch the eye
const SHIFT = 28; // px a case study sits off-centre while it is not the active one
const SWIPE = 44; // px of travel before a touch counts as a swipe, not a tap
function CaseStudyCarousel({ items }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const touchX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* Wraps in both directions. A five-item carousel with dead ends means the
     arrow a reader is already using goes inert exactly when they have seen
     enough to want the next one. */ const go = (n)=>setActive((n + items.length) % items.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": "Case studies",
        /* Fires for whichever control has focus, so the arrow keys work
         without this wrapper needing a tab stop of its own. */ onKeyDown: (e)=>{
            if (e.key === "ArrowLeft") go(active - 1);
            else if (e.key === "ArrowRight") go(active + 1);
            else return;
            e.preventDefault();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid",
                onTouchStart: (e)=>{
                    touchX.current = e.touches[0].clientX;
                },
                onTouchEnd: (e)=>{
                    const from = touchX.current;
                    touchX.current = null;
                    if (from === null) return;
                    const d = e.changedTouches[0].clientX - from;
                    if (Math.abs(d) > SWIPE) go(active + (d < 0 ? 1 : -1));
                },
                children: items.map((item, i)=>{
                    const on = i === active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo",
                        /*
               * A slide that has been scrolled PAST sits to the left and one
               * still to come sits to the right, so travel direction falls
               * out of the indices and nothing has to remember which way the
               * reader last went.
               *
               * transform here is a real inline transform, so naming it in
               * the transition list above is correct - unlike a Tailwind
               * -translate-x utility, which v4 compiles to the discrete
               * `translate` property instead. See the note in Pillars.tsx.
               */ style: {
                            opacity: on ? 1 : 0,
                            transform: on ? "none" : `translateX(${i < active ? -SHIFT : SHIFT}px)`,
                            transitionDuration: reduce ? "0ms" : `${SLIDE_MS}ms`,
                            pointerEvents: on ? "auto" : "none"
                        },
                        /* Takes the inactive studies out of the tab order and out of
                 the accessibility tree in one attribute - they are stacked
                 on top of each other and invisible, so their links must not
                 be reachable. React 19 takes this as a boolean. */ inert: !on,
                        /* Hooks for the no-JS fallback in layout.tsx, which hides the
                 four inactive slides and the controls outright. Without
                 them the blanket "unhide anything with opacity:0" rule
                 there stacks all five studies in this one cell. */ "data-cs-slide": "",
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `${i + 1} of ${items.length}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Study, {
                            item: item,
                            live: on
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    }, item.slug, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-cs-controls": "",
                className: "mt-8 flex items-center justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        label: "Previous case study",
                        onClick: ()=>go(active - 1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 18,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: items.map((item, i)=>{
                            const on = i === active;
                            const pillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === item.pillar);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActive(i),
                                "aria-label": `Case study ${i + 1}: ${item.title}`,
                                "aria-current": on,
                                /* The hit area is a constant 44x44 no matter how wide the
                   visible dot is - the dot itself is the child span. A 6px
                   tap target is not a tap target. */ className: "group grid h-11 w-6 place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    /* Width and colour both animate, and both are plain CSS
                     properties here rather than transforms, so naming them
                     literally is safe - see the Pillars.tsx note for the
                     case where it is not. */ className: `h-1.5 rounded-full transition-[width,background-color] duration-[var(--dur-base)] ease-out-expo ${on ? `w-6 ${pillar.mark}` : "w-1.5 bg-ink/25 group-hover:bg-ink/40"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            }, item.slug, false, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        label: "Next case study",
                        onClick: ()=>go(active + 1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 18,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "aria-live": "polite",
                className: "sr-only",
                children: `Case study ${active + 1} of ${items.length}: ${items[active].title}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CaseStudyCarousel, "8LPzDMJDofh6qqBhD+M8YKmoxMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = CaseStudyCarousel;
function Arrow({ label, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": label,
        className: "grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink transition-[background-color,border-color] duration-[var(--dur-base)] ease-out-expo hover:border-ink/30 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c1 = Arrow;
function Study({ item, live }) {
    const pillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pillars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PILLARS"].find((p)=>p.id === item.pillar);
    const photos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryFor"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "grid h-full overflow-hidden rounded-lg bg-surface-raised shadow-card lg:grid-cols-[minmax(0,44%)_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/11] lg:aspect-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoStrip, {
                        photos: photos,
                        live: live,
                        title: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 p-6 lg:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-eyebrow uppercase text-white/80",
                                children: item.client ?? pillar.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-h3 mt-3 max-w-[18ch] text-white",
                                children: item.headline
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-small mt-3 text-white/70",
                                children: [
                                    item.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: " · "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    pillar.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 p-6 sm:p-8 lg:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Block, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        tint: pillar.ink,
                        label: "Problem",
                        body: item.problem
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Block, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
                        tint: pillar.ink,
                        label: "Solution",
                        body: item.solution
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-auto rounded-md p-5 ${pillar.wash}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Block, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                tint: pillar.ink,
                                label: "Impact",
                                body: item.impact
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${item.slug}`,
                                className: `text-small mt-4 inline-flex items-center gap-1.5 font-medium ${pillar.ink} hover:underline focus-visible:outline-2 focus-visible:outline-offset-2`,
                                children: [
                                    "Read the full case study",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_c2 = Study;
function Block({ icon: Icon, tint, label, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        "aria-hidden": "true",
                        className: tint
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-eyebrow uppercase text-ink",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-small mt-2 text-ink-body",
                children: body
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_c3 = Block;
/*
 * The nested one. Crossfade only - no movement at all, which is what keeps
 * it from reading as a second carousel competing with the outer one.
 */ function PhotoStrip({ photos, live, title }) {
    _s1();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [held, setHeld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const many = photos.length > 1;
    /*
   * setTimeout keyed on `i`, not setInterval. Two consequences, both
   * wanted: pressing a dot restarts the full ten seconds rather than
   * dropping the reader into whatever was left of the current tick, and the
   * timer simply does not exist while the study is off-screen - four
   * hidden strips are not quietly cycling photographs nobody can see.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoStrip.useEffect": ()=>{
            if (!live || held || reduce || !many) return;
            const t = setTimeout({
                "PhotoStrip.useEffect.t": ()=>setI({
                        "PhotoStrip.useEffect.t": (n)=>(n + 1) % photos.length
                    }["PhotoStrip.useEffect.t"])
            }["PhotoStrip.useEffect.t"], DWELL);
            return ({
                "PhotoStrip.useEffect": ()=>clearTimeout(t)
            })["PhotoStrip.useEffect"];
        }
    }["PhotoStrip.useEffect"], [
        live,
        held,
        reduce,
        many,
        photos.length,
        i
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            photos.map((p, n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: p.src,
                    /* Only the lead frame of each study is described. The rest are
             further views of the same event, and an empty alt is what marks
             them decorative - three descriptions of one scene is worse for
             a screen reader than one. */ alt: n === 0 ? p.alt : "",
                    fill: true,
                    sizes: "(max-width: 1024px) 100vw, 520px",
                    /* Source frames are 370x351 and soften past roughly 420 CSS px
             (see work.ts). At the 44% column this box lands near 520px
             wide, an upscale close to what the section it replaced already
             ran at. Real masters remain a launch blocker. */ className: "object-cover transition-opacity ease-out-expo",
                    style: {
                        opacity: n === i ? 1 : 0,
                        transitionDuration: reduce ? "0ms" : `${FADE_MS}ms`
                    },
                    /* See layout.tsx. These are absolutely stacked, so with no JS the
             blanket unhide rule leaves the LAST one painted rather than the
             lead frame - the only photo with real alt text. */ "data-cs-photo": ""
                }, `${p.src}-${n}`, false, {
                    fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)),
            many && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                /* Hover OR keyboard focus anywhere in the dot group holds the
             timer. Without the focus half, tabbing to a dot and reading the
             labels would be interrupted by the photo changing underneath. */ onMouseEnter: ()=>setHeld(true),
                onMouseLeave: ()=>setHeld(false),
                onFocusCapture: ()=>setHeld(true),
                onBlurCapture: ()=>setHeld(false),
                "data-cs-dots": "",
                /*
           * z-10 IS LOAD-BEARING, not polish. These dots are rendered from
           * inside PhotoStrip, which the media panel places FIRST - before
           * the scrim and before the title block. Both of those are
           * absolutely positioned siblings that come later, so at z-auto
           * they paint over the dots and, more to the point, take the
           * clicks: the title block is inset-x-0 bottom-0, so its BOX
           * covers this corner even though its text stops well short of it.
           * The scrim is pointer-events-none and was never the problem on
           * its own, but at from-black/85 down here it was also most of the
           * reason the dots were hard to see.
           *
           * Raising the dots fixes both at once. The alternative - moving
           * them after the title block in the markup - would mean lifting
           * PhotoStrip's state up into Study for no other reason.
           */ className: "absolute right-4 bottom-4 z-10 flex items-center gap-1.5 lg:right-6 lg:bottom-6",
                children: photos.map((p, n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setI(n),
                        "aria-label": `Photo ${n + 1} of ${photos.length}, ${title}`,
                        "aria-current": n === i,
                        className: "grid h-8 w-5 place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `h-1.5 w-1.5 rounded-full transition-[background-color,scale] duration-[var(--dur-base)] ease-out-expo ${n === i ? "scale-125 bg-white" : "bg-white/45 hover:bg-white/70"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                            lineNumber: 386,
                            columnNumber: 15
                        }, this)
                    }, `${p.src}-${n}`, false, {
                        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                        lineNumber: 373,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
                lineNumber: 345,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CaseStudyCarousel.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_s1(PhotoStrip, "PVhed2hoPyEAfhXlUH2szcPP59Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c4 = PhotoStrip;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CaseStudyCarousel");
__turbopack_context__.k.register(_c1, "Arrow");
__turbopack_context__.k.register(_c2, "Study");
__turbopack_context__.k.register(_c3, "Block");
__turbopack_context__.k.register(_c4, "PhotoStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Container({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-[1440px] px-6 lg:px-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Eyebrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eyebrow",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Eyebrow({ children, className }) {
    // text-eyebrow is deliberately OUTSIDE cn()'s merge scope - see the
    // tailwind-merge warning in tokens.css. Passed through cn(), tailwind-
    // merge does not know text-eyebrow is a custom font-size token, treats
    // it as a text-COLOR utility (its fallback for any unrecognized
    // text-{word}), sees it "conflicting" with text-ink-muted, and silently
    // drops one of them - which is exactly what was happening here.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-eyebrow ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-ink-muted uppercase", className)}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Eyebrow.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = Eyebrow;
var _c;
__turbopack_context__.k.register(_c, "Eyebrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, delay = 0, className }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: reduce ? 0 : 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-80px"
        },
        transition: {
            duration: reduce ? 0.01 : 0.7,
            delay: reduce ? 0 : delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Reveal, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Section({ children, className, id, as: Tag = "section" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-[clamp(64px,8vw,128px)]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/liquid-reveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/*
 * WHY THE VIEW TRANSITIONS API AND NOT AN OVERLAY DIV.
 *
 * The naive version is a full-screen element painted in the incoming
 * theme colour that grows over the page. It always looks wrong, because
 * it is a flat colour: the moment it covers anything, that content
 * vanishes, and the swap at the end pops the text back in.
 *
 * startViewTransition snapshots the real OLD and NEW renderings of the
 * page as images and stacks them. Clipping the NEW snapshot means the
 * blob reveals the genuinely re-themed page - text, images, the lot -
 * spreading over the old one. Nothing disappears at any point.
 *
 * Support is Chrome/Edge/Safari; Firefox has not shipped it. There the
 * theme still switches, with the short colour crossfade below instead of
 * the spread. Same for prefers-reduced-motion, where an expanding
 * full-viewport shape is exactly what the setting exists to suppress.
 */ // document.startViewTransition and ViewTransition are already in lib.dom -
// do not re-declare them here, the local shape will not match and tsc
// rejects it (TS2717 / TS2687).
const CROSSFADE_MS = 380;
function ThemeToggle({ className }) {
    _s();
    const { theme, applyTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // theme is null until mounted (see use-theme.ts) - render the neutral
    // state so the server and the client agree.
    const next = theme === "dark" ? "light" : "dark";
    const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    function crossfade() {
        document.documentElement.classList.add("theme-crossfade");
        window.setTimeout(()=>document.documentElement.classList.remove("theme-crossfade"), CROSSFADE_MS);
    }
    async function onClick() {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!document.startViewTransition || reduce) {
            if (!reduce) crossfade();
            applyTheme(next);
            return;
        }
        // The LARGEST of the three viewport measures, not innerWidth alone.
        // They disagree in ordinary situations - clientWidth excludes a classic
        // scrollbar, visualViewport shrinks under pinch-zoom or a soft keyboard
        // - and the blob is sized against a snapshot box that may match any of
        // them. Taking the max can only ever over-cover, and over-covering is
        // invisible (the blob is off-screen by then) while under-covering
        // leaves a strip of the old theme sitting on an edge. See EDGE_SLACK in
        // liquid-reveal.ts for the rest of that argument.
        const de = document.documentElement;
        const vv = window.visualViewport;
        const w = Math.max(window.innerWidth, de.clientWidth, vv?.width ?? 0);
        const h = Math.max(window.innerHeight, de.clientHeight, vv?.height ?? 0);
        const rect = btnRef.current?.getBoundingClientRect();
        const x = rect ? rect.left + rect.width / 2 : w / 2;
        const y = rect ? rect.top + rect.height / 2 : 0;
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverRadius"])(x, y, w, h);
        const transition = document.startViewTransition(()=>applyTheme(next));
        try {
            await transition.ready;
        } catch  {
            return; // a second toggle interrupted this one
        }
        document.documentElement.animate({
            clipPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liquid$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liquidFrames"])(x, y, r)
        }, {
            duration: 900,
            easing: "linear",
            pseudoElement: "::view-transition-new(root)"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        onClick: onClick,
        "aria-label": label,
        title: label,
        className: `inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink ${className ?? ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                size: 19,
                "aria-hidden": "true",
                className: "hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                size: 19,
                "aria-hidden": "true",
                className: "dark:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "UqOtBF5U/Z9514j6nKi++aq1gKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/petals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MARK_VIEWBOX",
    ()=>MARK_VIEWBOX,
    "PETALS",
    ()=>PETALS,
    "STEP",
    ()=>STEP
]);
const MARK_VIEWBOX = "-56 -21 1727 1645";
const PETALS = [
    {
        id: "corporate",
        color: "var(--color-petal-corporate)",
        authored: "#159cbc",
        body: "M659.58,394.82s53.93-57.62,196.39-258.33c100.58-145.35,180.91-99.2,180.91-99.2,0,0,76.2,37.81,6.12,193.01-85.52,195.4-252.89,376.57-350.22,409.47-97.33,32.91-176.01-72.94-209.14-118.9-33.13-45.96-93.62-186.44-97.25-311.41-.62-71.27,64.97-56.88,124.89,14.41,48.31,57.47,149.74,175.51,148.29,170.94Z",
        head: {
            cx: 667.46,
            cy: 97.71,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-1.54 11.17) rotate(-.96)"
        }
    },
    {
        id: "content",
        color: "var(--color-petal-content)",
        authored: "#fcd088",
        body: "M1182.65,558.78s72.95,30.12,311.02,92.58c171.5,42.81,156.66,134.26,156.66,134.26,0,0-8.48,84.64-178.43,73.85-213.01-11.05-441.59-103.71-506.73-183.16-65.14-79.45,6.12-190.43,37.43-237.65,31.31-47.21,141.4-153.4,257.04-200.9,66.47-25.74,76.15,40.71,30.59,121.94-36.72,65.48-111.36,202.05-107.6,199.08Z",
        head: {
            cx: 1463.5,
            cy: 479.93,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(746.8064 1843.1958) rotate(-80.4244)"
        }
    },
    {
        id: "activation",
        color: "var(--color-petal-activation)",
        authored: "#e8262d",
        body: "M1186.12,1086.94s-8.96,78.41-3.71,324.49c5.88,176.66-86.13,187.48-86.13,187.48,0,0-83.72,15.06-119.96-151.32-47.8-207.87-21.4-453.1,37.13-537.54,58.53-84.44,184.81-46.35,238.8-29.19,53.99,17.16,186.3,93.9,263.71,192.07,42.98,56.86-18.26,84.4-108.87,62.87-73.05-17.35-224.85-51.67-220.96-48.86Z",
        head: {
            cx: 1338.99,
            cy: 1335.38,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-139.39 156.17) rotate(-6.35)"
        }
    },
    {
        id: "live",
        color: "var(--color-petal-live)",
        authored: "#46b052",
        body: "M682.03,1268.19s-77.41,15.38-310.17,95.4c-166.46,59.46-204.82-24.87-204.82-24.87,0,0-39.87-75.14,107.55-160.39,183.4-108.9,425-158.52,523.26-128.52,98.26,30,100.49,161.88,100.61,218.53.12,56.65-32.63,206.06-102.53,309.71-41.04,58.27-85.94,8.34-93.07-84.52-5.74-74.86-19.35-229.89-20.83-225.34Z",
        head: {
            cx: 492.03,
            cy: 1489.52,
            // Note the swapped radii - this one is authored rotated in the source.
            rx: 97.72,
            ry: 80.36,
            transform: "translate(-565.26 330.68) rotate(-24.1)"
        }
    },
    {
        id: "weddings",
        color: "var(--color-petal-weddings)",
        authored: "#834e9b",
        body: "M354.81,843.31s-36.98-69.72-180.54-269.65c-104.81-142.33-35.06-203.32-35.06-203.32,0,0,60.51-59.79,184.54,56.89,157.03,144.34,274.02,361.48,273.53,464.22-.49,102.74-126.15,142.78-180.38,159.19-54.22,16.4-206.74,27.99-326.11-9.16-67.61-22.56-32.7-79.92,54.19-113.44,70.05-27.02,214.63-84.62,209.83-84.74Z",
        head: {
            cx: 88.19,
            cy: 724.96,
            rx: 80.36,
            ry: 97.72,
            transform: "translate(-452.31 233.84) rotate(-40.8)"
        }
    }
];
const STEP = 360 / PETALS.length;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_SERVICE_IMAGE",
    ()=>DEMO_SERVICE_IMAGE,
    "SERVICES",
    ()=>SERVICES,
    "imageFor",
    ()=>imageFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/work.ts [app-client] (ecmascript)");
;
const SERVICES = [
    // Brand Activation (5)
    {
        slug: "experiential-marketing",
        name: "Experiential Marketing",
        pillar: "activation",
        legacyUrl: "marketing.php",
        // Distilled from `description` below, not lifted from the legacy
        // one-liner grid - see the interface comment above.
        blurb: "Face-to-face brand experiences that cut through digital noise and build real connection.",
        description: "In a world saturated with digital content and advertisements, experiential marketing offers a powerful way to cut through the noise by creating meaningful, face-to-face interactions between brands and consumers. Assertive Brand Communication brings brands to life, enabling people to experience their values, personality, and products in a dynamic and engaging setting. Whether through live events, brand activations, or immersive pop-ups, experiential marketing invites consumers to participate, interact, and form personal connections with the brand, resulting in experiences that are not just seen but felt. This deep emotional engagement is key to building long-term brand loyalty and driving authentic word-of-mouth promotion."
    },
    {
        slug: "btl-promotions-activations",
        name: "BTL Promotions & Activations",
        pillar: "activation",
        legacyUrl: "promotions-activations.php",
        blurb: "We help make intelligent and informed purchasing decisions for your customers.",
        description: "At Assertive Brand Communication, we excel in BTL (Below-The-Line) promotions and activations that drive direct engagement and boost brand visibility. Our team delivers creative and targeted campaigns, from concept development to execution, ensuring impactful interactions with your audience. We focus on maximizing reach and creating memorable experiences that enhance brand connection and drive results."
    },
    {
        slug: "brand-launches",
        name: "Brand Launches",
        pillar: "activation",
        legacyUrl: "brand-launches.php",
        blurb: "From press events to elegant invites, we innovate and showcase your brand.",
        description: "At Assertive Brand Communication, we excel at crafting impactful brand launches that introduce your brand to the market with a lasting impression. Our team combines strategic planning, creative design, and flawless execution to create memorable experiences that resonate with your target audience. From concept to completion, we handle every detail, ensuring your brand launch not only captures attention but also builds excitement and drives loyalty. Trust us to deliver a bold, innovative launch that positions your brand for success."
    },
    {
        slug: "audience-acquisition",
        name: "Audience Acquisition",
        pillar: "activation",
        legacyUrl: "audience-acquisition.php",
        // Distilled from `description` below - see the interface comment above.
        blurb: "Market research and targeted outreach that bring the right audience to your event.",
        description: "At Assertive Brand Communication, our approach to audience acquisition is designed to ensure optimal engagement and impact for every event. We employ a strategic blend of market research, targeted outreach, and data-driven insights to attract and retain a relevant audience. By leveraging our industry expertise and utilizing advanced analytics, we create tailored strategies that enhance event visibility, maximize attendance, and drive meaningful interactions. Our commitment to understanding audience needs and preferences allows us to deliver exceptional event experiences that achieve our clients' goals and exceed expectations."
    },
    {
        slug: "merchandising",
        name: "Merchandising",
        pillar: "activation",
        legacyUrl: "merchandising.php",
        blurb: "Create impactful brand merchandises to increase visibility and engagement.",
        description: "At Assertive Brand Communication, we specialize in merchandising for events, providing tailored solutions that enhance brand visibility and maximize engagement. Our team manages all aspects, from product selection and design to on-site sales and inventory management. We ensure a seamless integration of merchandising into your event, creating a memorable experience that drives both audience interaction and brand impact."
    },
    // Corporate & MICE (4)
    {
        slug: "corporate-events",
        name: "Corporate Events",
        pillar: "corporate",
        legacyUrl: "corporate-events.php",
        blurb: "Conferences are the ideal way to create a platform for networking.",
        description: "Corporate events are pivotal moments that bring together key stakeholders to align on goals, celebrate achievements, and foster a sense of community within a professional setting. Whether it's an annual meeting, a team-building retreat, or a client appreciation event, these occasions provide invaluable opportunities to enhance brand image, share knowledge, and strengthen relationships. At Assertive Brand Communication, we believe that with careful planning and attention to detail, corporate events can be transformed into memorable experiences that motivate employees, impress clients, and reinforce the company's vision and values. By creating an environment that encourages engagement and collaboration, Assertive Brand Communication helps drive business growth and build a stronger, more connected corporate culture."
    },
    {
        slug: "mice-and-logistics",
        name: "MICE and Logistics",
        pillar: "corporate",
        legacyUrl: "logistics.php",
        blurb: "Rewarding and motivating employees are essential for the growth of any company.",
        // PLACEHOLDER - written in-house, not extracted. See the interface
        // comment above: the legacy page's own paragraph is experiential-
        // marketing's copy, pasted in wholesale. No numbers anywhere, same
        // rule as work.ts's case-study copy - to be replaced wholesale once
        // real client copy exists.
        description: "At Assertive Brand Communication, we manage the MICE and logistics behind conferences, incentive trips and large-scale trade shows - venue sourcing, delegate travel, on-ground coordination and the dozens of moving parts a multi-day corporate gathering depends on. Our team plans for the schedule that will actually happen, not the one on paper, so speakers start on time and delegates are never the ones solving a logistics problem. The goal is the same one good MICE planning always has: an event substantial enough to matter to the people attending it, run so smoothly that none of the planning is visible."
    },
    {
        slug: "exhibition",
        name: "Exhibition",
        pillar: "corporate",
        legacyUrl: "exhibition.php",
        blurb: "Do you know what it takes to make your exhibitions impactful?",
        description: "At Assertive Brand Communication, we specialize in designing and managing impactful exhibitions that showcase your brand and engage your audience. Our team brings creativity and strategic planning to every project, ensuring your exhibition stands out and delivers a memorable experience. From booth design and setup to audience interaction and post-event analysis, we handle every detail to maximize your brand's visibility and impact. Partner with us to create an exhibition that effectively communicates your brand's message and drives meaningful connections."
    },
    {
        slug: "award-functions",
        name: "Award Functions",
        pillar: "corporate",
        legacyUrl: "award-fuctions.php",
        blurb: "Extend your organization's reach and influence through motivating award functions.",
        description: "At Assertive Brand Communication, we specialize in organizing awards functions that celebrate excellence and create memorable experiences. Our team handles every detail, from event planning and design to execution and production, ensuring a seamless and impactful event. With a focus on professionalism and creativity, we deliver award functions that honor achievements and enhance your brand's prestige. Partner with us to create a distinguished event that leaves a lasting impression."
    },
    // Live & Entertainment (4)
    {
        slug: "live-concerts",
        name: "Live Concerts",
        pillar: "live",
        legacyUrl: "live-concerts.php",
        blurb: "When you're looking for a crowd-pleasing event, live concerts are a surefire success.",
        description: "At Assertive Brand Communication, we create and manage live concerts that deliver unforgettable experiences and elevate your brand. From planning and staging to promotion and execution, our team ensures a seamless production that captivates audiences and highlights your brand's presence. With a commitment to excellence and creativity, we turn live concerts into spectacular events that leave a lasting impact."
    },
    {
        slug: "artist-management",
        name: "Artist Management",
        pillar: "live",
        legacyUrl: "artist-management.php",
        blurb: "From booking to promotions, our artist management service handles it all.",
        description: "At Assertive Brand Communication, we provide expert artists management services that ensure smooth and successful engagements. Our team handles all aspects, from bookings and negotiations to logistics and event coordination, allowing artists to focus on their craft. We are dedicated to delivering seamless experiences and maximizing opportunities, enhancing both the artist's and the client's objectives."
    },
    {
        slug: "televised-shows",
        name: "Televised Shows",
        pillar: "live",
        legacyUrl: "televised.php",
        blurb: "We are one of the few event management agencies to organize and manage televised shows.",
        description: "At Assertive Brand Communication, we excel in managing televised events that capture attention and deliver your brand's message to a wide audience. From planning and production to live broadcast, our team ensures a flawless execution that engages viewers and elevates your brand. With a focus on creativity and technical expertise, we create televised events that leave a lasting impression. Trust us to turn your vision into a dynamic, memorable broadcast."
    },
    {
        slug: "sports-events",
        name: "Sports Events",
        pillar: "live",
        legacyUrl: "sports-events.php",
        blurb: "We organize adrenaline-filled sports events with top-notch thrill and precision.",
        description: "At Assertive Brand Communication, we design and manage sports events that captivate audiences and enhance brand visibility. Our team oversees every detail, from event planning and logistics to execution and promotion, ensuring a dynamic and engaging experience. With a focus on precision and creativity, we deliver sports events that highlight your brand and create memorable moments for participants and spectators alike."
    },
    // Content & Digital (2)
    {
        slug: "digital-marketing",
        name: "Digital Marketing",
        pillar: "content",
        legacyUrl: "digital-marketing.php",
        blurb: "Innovative digital marketing strategies to increase brand visibility.",
        description: "At Assertive Brand Communication, we leverage digital marketing to amplify event impact and drive engagement. Our team crafts targeted strategies, including social media campaigns, email marketing, and online promotions, to boost event visibility and connect with your audience. We focus on maximizing reach and interaction, ensuring your event achieves its full potential in the digital landscape."
    },
    {
        slug: "video-production",
        name: "Video Production & Content Creation",
        pillar: "content",
        legacyUrl: "video-production.php",
        blurb: "Professional video production for capturing your brand's most memorable moments.",
        description: "At Assertive Brand Communication, we offer expert video production and content creation services that bring your brand's story to life. Our team handles every aspect, from concept development and scripting to filming and editing, ensuring high-quality, engaging content. We focus on creating impactful videos that resonate with your audience and enhance your brand's presence."
    },
    // Weddings & Social (1)
    {
        slug: "wedding-management",
        name: "Wedding Management",
        pillar: "weddings",
        legacyUrl: "wedding-management.php",
        blurb: "Comprising of a team of qualified and experienced Wedding Industry experts.",
        // "At Royal Rasm" in the extracted source -> corrected to Assertive.
        // See the interface comment above; nothing else in this paragraph
        // was rewritten.
        description: "Wedding management is the art of transforming a couple's dream day into a seamless and unforgettable experience. At Assertive Brand Communication, we ensure that every detail, from the initial planning stages to the final \"I do,\" is carefully orchestrated to reflect the couple's unique vision and style. Our wedding management services cover everything from venue selection, décor design, and vendor coordination to timeline management and guest experience. We focus on making every moment flow effortlessly, allowing the couple and their guests to fully enjoy the celebration without worrying about the logistics. With Assertive Brand Communication's expert guidance and meticulous attention to detail, we turn a once-in-a-lifetime event into a flawless and joyous occasion."
    }
];
const DEMO_SERVICE_IMAGE = true;
function imageFor(service) {
    if (service.image) return service.image;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const samePillar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"].find((w)=>w.pillar === service.pillar);
    if (samePillar) return {
        src: samePillar.image,
        alt: samePillar.alt
    };
    // No WORK entry in this pillar at all - borrow deterministically by
    // SLUG POSITION, not object identity. See the "matched on slug, not
    // identity" note on work.ts's own galleryFor: an RSC-boundary re-fetch
    // of `service` would break an indexOf(service) lookup here the same way.
    const i = Math.max(0, SERVICES.findIndex((s)=>s.slug === service.slug));
    const borrowed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"][i % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK"].length];
    return {
        src: borrowed.image,
        alt: borrowed.alt
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATS",
    ()=>STATS
]);
const STATS = [
    {
        value: null,
        suffix: "+",
        label: "Events delivered"
    },
    {
        value: null,
        suffix: "+",
        label: "Cities"
    },
    {
        value: null,
        suffix: "",
        label: "Years in business"
    },
    {
        value: null,
        suffix: "+",
        label: "Brands served"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/work.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_FILL",
    ()=>DEMO_FILL,
    "WORK",
    ()=>WORK,
    "galleryFor",
    ()=>galleryFor
]);
const WORK = [
    {
        slug: "india-pod-day",
        title: "India Pod Day",
        client: "IVM Podcasts",
        pillar: "live",
        image: "/media/work/india-pod-day.webp",
        alt: "The Amazon Music India Pod Day stage, lit magenta, with seven armchairs set for a panel",
        gallery: [],
        note: "Stage, set and show management for the Amazon Music podcast showcase.",
        headline: "A Podcast Festival, Staged Like Live Television",
        problem: "Podcasting is an audio medium with no natural stage presence. India Pod Day had to work twice over - as a live event for the audience in the room, and as a set that would still read on camera in everything cut from it afterwards.",
        solution: "We built a panel set that holds up from every angle a camera could take it from, lit magenta so the brand reads even in a wide shot, and ran the day to broadcast timings so recording, audience changeover and stage resets never collided.",
        impact: "The showcase ran as one continuous programme rather than a series of separate recordings, and came away with a stage that photographed as well as it sounded."
    },
    {
        slug: "agenda-paschim",
        title: "Agenda Paschim",
        client: "News18 Network",
        pillar: "corporate",
        image: "/media/work/agenda-paschim.png",
        alt: "The News18 Agenda Paschim conclave set, a red and gold backdrop behind a panel seating arrangement",
        gallery: [],
        note: "Conclave set design and floor management for the News18 regional summit.",
        headline: "A Regional Conclave With National Polish",
        problem: "A news conclave lives or dies on its optics. Agenda Paschim needed a set carrying the authority of the network's national programming, built to a regional summit's schedule and travelling to its venue.",
        solution: "A modular red-and-gold set drawn from the channel's on-air identity, with a seating plan that keeps every wide shot populated and a floor process that moves speakers on and off between segments without breaking the recording.",
        impact: "The conclave held its published running order from first session to last, and the set carried the network's look consistently across every panel staged on it."
    },
    {
        slug: "achievers",
        title: "Achievers",
        client: "Cleartrip",
        pillar: "corporate",
        image: "/media/work/cleartrip-achievers.webp",
        alt: "The Achievers registration desk, staffed by four hosts in front of a purple branded backdrop",
        gallery: [],
        note: "Registration, hosting and on-ground delivery for the AgentBox partner awards.",
        headline: "An Awards Night That Starts At The Door",
        problem: "AgentBox partners arrive from across the country inside one narrow window. On a partner awards night the door is the first thing anyone experiences, and a queue there sets the tone for the whole evening.",
        solution: "A registration line built for throughput rather than decoration - credentials prepared ahead, four host positions working in parallel, and the branded backdrop placed so that even the queue reads as part of the event in photographs.",
        impact: "Guests moved from the door to their tables without a bottleneck, and the programme opened to a room that was already seated."
    },
    {
        slug: "india-drives",
        title: "India Drives",
        client: null,
        pillar: "live",
        image: "/media/work/india-drives.webp",
        alt: "Folk dancers in yellow and orange performing in front of a large illuminated LED stage",
        gallery: [],
        note: "Live performance programming and stage production.",
        headline: "Folk Tradition On A Broadcast Stage",
        problem: "The opening had to read as unmistakably Indian without tipping into tourism-brochure shorthand, on a stage whose scale and LED wall were built for a very different kind of act.",
        solution: "Live folk performance programmed against the lighting and screen cues rather than in front of them, so the choreography and the stage move as a single piece and the wall works as part of the costume, not as wallpaper behind it.",
        impact: "The opening set the register for everything that followed on the stage that night, and gave the event its most-used sequence of footage."
    },
    {
        slug: "wedding-social",
        title: "Wedding & Social",
        client: null,
        pillar: "weddings",
        image: "/media/work/wedding.webp",
        alt: "A large illuminated wedding set built as an ornate palace facade, with tiered seating in front",
        gallery: [],
        note: "Set construction, lighting and guest experience for a large-format wedding.",
        headline: "A Palace Built To Stand For One Night",
        problem: "The brief asked for a facade with the presence of a real building - at a scale that still had to be trucked in, built, lit, used and struck inside a single weekend.",
        solution: "A sectional palace set engineered around the load-in and lit to hold its detail all the way to the top of the frame, with tiered seating placed so guests read the whole facade from where they are sitting rather than only the middle of it.",
        impact: "The set carried the ceremony as its backdrop and the reception as its centrepiece, and came down on schedule the next morning."
    }
];
const DEMO_FILL = true;
function galleryFor(item) {
    const own = [
        {
            src: item.image,
            alt: item.alt
        },
        ...item.gallery
    ];
    if (!DEMO_FILL || own.length > 1) return own;
    /*
   * Matched on SLUG, not by identity. This runs inside a client component
   * whose items were handed over the server boundary, so they arrive as
   * fresh objects deserialized from the RSC payload - never the same
   * references this module's own WORK array holds. indexOf found nothing,
   * returned -1, and -1 % 4 is -1 in JS rather than 3, so the fill picked
   * an undefined entry and took the prerender down with it.
   */ const others = WORK.filter((w)=>w.slug !== item.slug);
    if (!others.length) return own;
    const at = Math.max(0, WORK.findIndex((w)=>w.slug === item.slug));
    const borrowed = [
        others[at % others.length],
        others[(at + 2) % others.length]
    ];
    return [
        ...own,
        ...borrowed.map((w)=>({
                src: w.image,
                alt: w.alt
            }))
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/liquid-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coverRadius",
    ()=>coverRadius,
    "liquidFrames",
    ()=>liquidFrames
]);
/*
 * The liquid spread.
 *
 * A blob grows from the point you clicked until it covers the viewport.
 * It is not a circle: each frame samples N points around the centre and
 * pushes each one in or out by two summed sine waves, then joins them
 * with cubic Beziers. The wave phase advances frame to frame, so the
 * edge rolls as it expands rather than just scaling - that is what reads
 * as liquid rather than as a wipe. The wobble amplitude decays toward 0
 * so it settles into a clean circle instead of ending mid-ripple.
 *
 * WHY EVERY FRAME HAS THE SAME COMMAND COUNT: CSS can only interpolate
 * between two path() values when their command lists match exactly in
 * length and type. Generate them any other way (varying N, mixing arcs)
 * and the browser silently falls back to a discrete jump at the midpoint.
 *
 * WHY THE RADIUS IS PRE-EASED HERE: the frames are handed to WAAPI with
 * easing "linear". A timing function in the options object is applied
 * BETWEEN EACH KEYFRAME PAIR, not once across the whole run, so with 15
 * keyframes an ease-out would produce fifteen little ease-outs. Baking
 * the ease into the radius keeps the motion a single decelerating spread.
 */ const SAMPLES = 14;
function blobPath(cx, cy, r, phase, amp) {
    const pts = [];
    for(let i = 0; i < SAMPLES; i++){
        const theta = i / SAMPLES * Math.PI * 2;
        const wobble = Math.sin(3 * theta + phase) * 0.6 + Math.sin(5 * theta - phase * 1.3) * 0.4;
        const rr = r * (1 + amp * wobble);
        pts.push([
            cx + rr * Math.cos(theta),
            cy + rr * Math.sin(theta)
        ]);
    }
    // Closed Catmull-Rom through the samples, expressed as cubic Beziers.
    const f = (n)=>n.toFixed(1);
    let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
    for(let i = 0; i < SAMPLES; i++){
        const p0 = pts[(i - 1 + SAMPLES) % SAMPLES];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % SAMPLES];
        const p3 = pts[(i + 2) % SAMPLES];
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2[0])} ${f(p2[1])}`;
    }
    return `${d} Z`;
}
/*
 * Slack added to the cover radius, in px, on top of the corner distance.
 *
 * The blob is positioned with getBoundingClientRect / window.innerWidth,
 * i.e. the JS viewport - but it is CLIPPING ::view-transition-new(root),
 * whose coordinate space is the snapshot containing block. Those are the
 * same box in every engine tested here (Chromium and WebKit, verified),
 * yet the spec lets the snapshot block differ from the JS viewport by
 * browser UI insets, and a reported case had the right edge re-theming
 * visibly after everything else - which is what an OFFSET between the two
 * looks like. Not a too-small radius: the toggle sits near the right edge,
 * so that edge is the CLOSEST one and cannot be the last to fill unless
 * the whole blob is shifted away from it.
 *
 * A flat pixel margin rather than a bigger multiplier, because the two do
 * very different things to the timing. The radius is pre-eased with
 * ease-out-expo, so scaling it up moves the moment of full cover sharply
 * earlier: 1.06 -> 1.35 would cover the viewport by t=0.19 of a 900ms run
 * and leave three quarters of the animation as dead time. +72px on a
 * ~1478px radius is under 5%, absorbing an inset far larger than any
 * plausible one while barely touching how the spread reads.
 */ const EDGE_SLACK = 72;
function coverRadius(x, y, w, h) {
    return Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + EDGE_SLACK;
}
function liquidFrames(x, y, maxR, steps = 15) {
    const frames = [];
    for(let i = 0; i <= steps; i++){
        const t = i / steps;
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // ease-out-expo
        // Overshoot the cover radius slightly so the wobble never exposes a
        // corner on the final frame.
        const r = maxR * 1.06 * eased;
        const amp = 0.17 * (1 - eased) + 0.012;
        frames.push(`path("${blobPath(x, y, r, t * Math.PI * 1.7, amp)}")`);
    }
    return frames;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-dropdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropdown",
    ()=>useDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDropdown() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[clearTimers]": ()=>{
            if (openTimer.current) clearTimeout(openTimer.current);
            if (closeTimer.current) clearTimeout(closeTimer.current);
        }
    }["useDropdown.useCallback[clearTimers]"], []);
    const openNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[openNow]": ()=>{
            clearTimers();
            setOpen(true);
        }
    }["useDropdown.useCallback[openNow]"], [
        clearTimers
    ]);
    const closeNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[closeNow]": ()=>{
            clearTimers();
            setOpen(false);
        }
    }["useDropdown.useCallback[closeNow]"], [
        clearTimers
    ]);
    const openWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[openWithDelay]": ()=>{
            clearTimers();
            openTimer.current = setTimeout({
                "useDropdown.useCallback[openWithDelay]": ()=>setOpen(true)
            }["useDropdown.useCallback[openWithDelay]"], 150);
        }
    }["useDropdown.useCallback[openWithDelay]"], [
        clearTimers
    ]);
    const closeWithDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[closeWithDelay]": ()=>{
            clearTimers();
            closeTimer.current = setTimeout({
                "useDropdown.useCallback[closeWithDelay]": ()=>setOpen(false)
            }["useDropdown.useCallback[closeWithDelay]"], 300);
        }
    }["useDropdown.useCallback[closeWithDelay]"], [
        clearTimers
    ]);
    const rootProps = {
        onMouseEnter: openWithDelay,
        onMouseLeave: closeWithDelay,
        onBlur: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) closeNow();
        },
        onKeyDown: (e)=>{
            if (e.key === "Escape") closeNow();
        }
    };
    const triggerProps = {
        onFocus: openNow,
        onClick: ()=>open ? closeNow() : openNow(),
        "aria-expanded": open,
        "aria-haspopup": true
    };
    return {
        open,
        rootProps,
        triggerProps,
        openNow,
        closeNow
    };
}
_s(useDropdown, "z6TPrCuORc786y4H7uWqC7pDh94=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-in-view-once.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInViewOnce",
    ()=>useInViewOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useInViewOnce(margin = "0px") {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInViewOnce.useEffect": ()=>{
            if (!ref.current || inView) return;
            const io = new IntersectionObserver({
                "useInViewOnce.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setInView(true);
                }
            }["useInViewOnce.useEffect"], {
                rootMargin: margin
            });
            io.observe(ref.current);
            return ({
                "useInViewOnce.useEffect": ()=>io.disconnect()
            })["useInViewOnce.useEffect"];
        }
    }["useInViewOnce.useEffect"], [
        margin,
        inView
    ]);
    return {
        ref,
        inView
    };
}
_s(useInViewOnce, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-motion-styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionStyles",
    ()=>useMotionStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMotionStyles(ref, styles) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMotionStyles.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const unsubscribe = Object.entries(styles).map({
                "useMotionStyles.useEffect.unsubscribe": ([prop, value])=>{
                    const write = {
                        "useMotionStyles.useEffect.unsubscribe.write": (v)=>el.style.setProperty(prop, String(v))
                    }["useMotionStyles.useEffect.unsubscribe.write"];
                    write(value.get());
                    return value.on("change", write);
                }
            }["useMotionStyles.useEffect.unsubscribe"]);
            return ({
                "useMotionStyles.useEffect": ()=>unsubscribe.forEach({
                        "useMotionStyles.useEffect": (u)=>u()
                    }["useMotionStyles.useEffect"])
            })["useMotionStyles.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useMotionStyles.useEffect"], []);
}
_s(useMotionStyles, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const THEME_STORAGE_KEY = "assertive-theme";
function useTheme() {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const read = {
                "useTheme.useEffect.read": ()=>setThemeState(document.documentElement.dataset.theme ?? "light")
            }["useTheme.useEffect.read"];
            read();
            // Follow the OS only while the visitor has not made a choice.
            const mq = window.matchMedia("(prefers-color-scheme: dark)");
            const onChange = {
                "useTheme.useEffect.onChange": ()=>{
                    try {
                        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
                    } catch  {
                    /* storage blocked - fall through and follow the OS */ }
                    document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
                    read();
                }
            }["useTheme.useEffect.onChange"];
            mq.addEventListener("change", onChange);
            return ({
                "useTheme.useEffect": ()=>mq.removeEventListener("change", onChange)
            })["useTheme.useEffect"];
        }
    }["useTheme.useEffect"], []);
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[applyTheme]": (next)=>{
            document.documentElement.dataset.theme = next;
            setThemeState(next);
            try {
                localStorage.setItem(THEME_STORAGE_KEY, next);
            } catch  {
            /* private mode - the theme still applies for this session */ }
        }
    }["useTheme.useCallback[applyTheme]"], []);
    return {
        theme,
        applyTheme
    };
}
_s(useTheme, "j2OA5C8qh1pSLrYTJRrJZ6m8aXI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0r35l55._.js.map